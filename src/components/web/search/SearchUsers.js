import React, { Component } from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import SearchUserItem from "./SearchUserItem";

const SearchUsers = ( { users }) => {
    return (
        <div className="search-user">
            <Scrollbars
                style={{}}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={400}>
                {
                    users.map((user, key) => (
                        <div className="search-user-wrapper" key={user._id}>
                            <SearchUserItem item={user}></SearchUserItem>
                        </div>
                    ))
                } 
            </Scrollbars>
        </div>
    );
};


SearchUsers.propTypes = {
    users: PropTypes.any
};
  
export default SearchUsers;
  