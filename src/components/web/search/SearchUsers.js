import React, { Component } from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import * as Infinite from "react-infinite"
import SearchUserItem from "./SearchUserItem";

const SearchUsers = ( { users = [], onInfiniteLoad }) => {
    return (
        <div className="search-user">
            {
                users && users.length > 0 && (
                    <Infinite containerHeight={400} infiniteLoadBeginEdgeOffset={300} elementHeight={40} onInfiniteLoad={onInfiniteLoad}>
                        {
                            users.map((user, key) => (
                                <div className="search-user-wrapper" key={user._id}>
                                    <SearchUserItem item={user}></SearchUserItem>
                                </div>
                            ))
                        } 
                    </Infinite>
                )
            }
        </div>
    );
};


SearchUsers.propTypes = {
    users: PropTypes.any,
    onInfiniteLoad: PropTypes.any
};
  
export default SearchUsers;
  