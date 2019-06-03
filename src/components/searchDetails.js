import React from "react";
import UserList from "./userList";
import Saveduser from "./savedUser";


const SearchDetails = ()=>{
    return (
        <div style={userDetails}>
        <UserList></UserList>
        <Saveduser></Saveduser>
        </div>
    )
}


const userDetails={
    width: "80%",
    margin: 'auto',
    marginTop:"100px",
    display: "-webkit-inline-box",
    marginLeft: "10%"
  }
export default SearchDetails;