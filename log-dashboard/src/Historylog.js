import React, { Component } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import axios from 'axios';
import * as moment from 'moment';
// import Modal from './Modal/modal'
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import JSONTree from 'react-json-tree'

class Historylog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loading: true,
            show: false,
            modalData: {}
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(rowData) {
        this.setState({
            show: true,
            modalData: rowData
        });
    }

    componentDidMount() {
        axios.post(`http://picstagraph-backend-dev2.us-east-1.elasticbeanstalk.com/api/auth/login`, { email: 'vishal.raut11@gmail.com', password: 'chetan098' })
            .then(res => {
                let token = res.data.data.token;
                this.getErrorData(token);
            }).catch(function (error) {
                console.log(error);
            });
    }


    getErrorData = (token) => {
        var jsonArr = [];
        axios.get(`http://picstagraph-backend-dev2.us-east-1.elasticbeanstalk.com/api/historylog`, { headers: { "Authorization": token } })
            .then(res => {
                const historylog = res.data.data;
                console.log('historylog', historylog);
                Object.keys(historylog).map(function (key, index) {
                    jsonArr.push({
                        userid: historylog[key].userId,
                        functionName: historylog[key].info.functionName,
                        message: historylog[key].message,
                        info: historylog[key].info,
                        data: historylog[key].data,
                        tableData: historylog[key].tableData,
                    });
                });
                this.setState({ data: jsonArr, loading: false });
            })
    };


    renderModal = () => {
        this.state.modalData.createdAt = moment(this.state.modalData.createdAt).format('MM/DD/YYYY');
        let data = JSON.stringify(this.state.modalData);

        let firstReplaceString = data.replace(/[{}]/g, '');
        let secondReplaceString = firstReplaceString.replace(/[,]/g, '\n');

        return (
            <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" className="data-log-modal">
                <Modal.Header closeButton >
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab className="bodyScrollbar" eventKey={1} title="Text Viewer">
                            <div className="modalBody">
                                {data}
                            </div>
                        </Tab>
                        <Tab className="bodyScrollbar" eventKey={2} title="JSON Viewer">
                            <JSONTree
                                data={this.state.modalData}
                            />
                        </Tab>
                    </Tabs>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {

        let rowData = this.state.data;
        console.log(rowData);
        return (
            <div className="App">
                {this.state.loading ? <div><img src={"spinner.gif"} /></div> :
                    <MaterialTable
                        columns={[
                            { title: 'UserId', field: 'userid' },
                            { title: 'Function Name', field: 'functionName' },
                            { title: 'Message', field: 'message' }
                        ]}
                        data={this.state.data}
                        title="History"
                        options={{
                            columnsButton: true,
                            exportButton: true,
                        }}
                        detailPanel={rowData => {
                            return (
                                <div className="messageInfo" >
                                    <b>Message : {rowData.message}</b>
                                    <button className="btn-margin" type="button" onClick={() => this.handleShow(rowData)}>Details</button>
                                </div>
                            )
                        }}
                        onClick={() => { console.log("Hello button clickd"); }}
                    />}
                {this.renderModal()}
            </div>
        );
    }
}

export default Historylog;
