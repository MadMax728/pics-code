import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Infinite from "react-infinite"
import SearchUserItem from "./SearchUserItem";

const SearchUsers = ( { users = [], isInfiniteLoading = false, onInfiniteLoad }) => {
    return (
        <div className="search-user">
            {
                users && users.length > 0 && (
                    <Infinite 
                        containerHeight={400} 
                        infiniteLoadBeginEdgeOffset={300} 
                        elementHeight={40} 
                        isInfiniteLoading={isInfiniteLoading}
                        onInfiniteLoad={onInfiniteLoad}>
                        {
                            users.map((user, key) => {
                                if( user && user.id) {
                                    return (
                                        <div className="search-user-wrapper" key={user.id}>
                                           <SearchUserItem item={user}></SearchUserItem>
                                       </div>
                                   )
                                }
                            })
                        } 
                    </Infinite>
                )
            }
        </div>
    );
};


SearchUsers.propTypes = {
    users: PropTypes.any,
    onInfiniteLoad: PropTypes.any,
    isInfiniteLoading: PropTypes.bool
};
  
export default SearchUsers;
  