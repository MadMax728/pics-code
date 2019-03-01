import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchUserItem from "./SearchUserItem";

const SearchUsers = ( { users }) => {
    return (
        <div className="search-user">
           {
               users.map((user, key) => (
                   <div className="search-user-wrapper" key={user._id}>
                        <SearchUserItem item={user}></SearchUserItem>
                   </div>
                ))
            } 
        </div>
    );
};


SearchUsers.propTypes = {
    users: PropTypes.any
};
  
export default SearchUsers;
  