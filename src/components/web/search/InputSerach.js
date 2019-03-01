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
            searchText: "",
            users: [],
            page: 1,
            pages: 1,
            limit: 40
        }
    }

    render() {
        const { searchText, isInfiniteLoading, users } = this.state;
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
                    <SearchUsers 
                        users={users} 
                        close={this.clearUserSearch}
                        isInfiniteLoading={isInfiniteLoading} 
                        onInfiniteLoad={this.handleInfiniteLoad}>
                    </SearchUsers>
                </div>
            </form>
        );

    }

    /**
     * handleInfiniteLoad
     */
    handleInfiniteLoad = () => {
        let { page, pages } = this.state;
        if(pages > page) {
            this.setState({ isInfiniteLoading: true, page : page + 1 }, () => {
                this.getSearchForHeader(true);
            });
        }
        
    }

    /**
     * onInputChange
     */
    onInputChange = (e) => {
        this.setState({ searchText: e.values.val}, () => {
            this.getSearchForHeader();
        });
    };

    clearUserSearch = () => {
        this.setState({ searchText: "", users: []});
    }

    /**
     * getSearchForHeader
     */
    getSearchForHeader = (isConcat = false) => {
       const { searchText, users, page, limit } = this.state;
       
       if(!searchText) {
           this.clearUserSearch()
           return;
       }

       this.props.getSearchForHeader(searchText, page, limit).then(() => {
            const { searchData } = this.props;
            const newUsers = isConcat ? [...users, ...searchData.users] : searchData.users;
            if (!searchData.isLoading) {
                this.setState({
                    users: newUsers,
                    page: searchData.page,
                    pages: searchData.pages,
                    isInfiniteLoading: false
                });
            }
        });
    }
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
