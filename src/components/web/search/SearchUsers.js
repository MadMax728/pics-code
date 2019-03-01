import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchUserItem from "./SearchUserItem";

const SearchUsers = ( { users }) => {
    return (
        <div className="community" style={{ position: "absolute" }}>
           {
               users.map((user, key) => (
                   <div className="community_wrapper" key={user._id}>
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
  