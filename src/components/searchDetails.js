import React from "react";
import UserList from "./userList";



const SearchDetails = ()=>{
    return (
        <div style={userDetails}>
        <UserList></UserList>
        </div>
    )
}


const userDetails={
    width: "80%",
    margin: 'auto',
    marginTop:"100px",
    display: "-webkit-inline-box",
    marginLeft: "14%"
  }
export default SearchDetails;