import React, { Component } from "react";
import SearchUsers from './SearchUsers';
import { Button, Input } from "../../ui-kit";
import { connect } from "react-redux";
import { getSearchForHeader } from "../../../actions";
import PropTypes from "prop-types";

class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    render() {
        const { searchText } = this.state;
        const { searchData } = this.props;

        return (
            <form className="navbar-form navbar-left">
                <div className="input-group search-input-group">
                    <Input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={this.onInputChange}
                        value={searchText}
                    />
                </div>
                <div>
                    <SearchUsers users={searchData.users}></SearchUsers>
                </div>
            </form>
        );

    }

    onInputChange = e => {
        console.log('searching');
        this.setState({
            searchText: e.values.val
        });
        const searchText = e.values.val;
        let page = 1;
        let limit = 100;
        if (searchText) {
            this.props.getSearchForHeader(searchText, page, limit).then(() => {
                const { searchData } = this.props;
                if (!searchData.isLoading) {
                    console.log("Search results ", searchData.users);
                    //Set state or use same in list
                }
            });
        } else {
            console.log("clean cheat");
            this.props.searchData.users = [];
        }
    };
}


const mapStateToProps = state => ({
    searchData: state.searchData,
});

const mapDispatchToProps = {
    getSearchForHeader
};

InputSearch.propTypes = {
    searchData: PropTypes.any,
    getSearchForHeader: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputSearch);
