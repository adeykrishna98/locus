import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class UserList extends React.Component{

    
    render(){
        let data = this.props.userlist;
        console.log(data)
        let tablerow;
        if(data.users){
            console.log(data.users)
            tablerow = data.users.map(item=>{
                return(
                    <li style={listSt} key={item.id}>
                         {item.id}
                         <br/>
                        {item.name}
                        <br/>
                        {item.address}
                        <br/>
                        {item.pincode}
                    </li>
                )
            })
        }
        return(
            <div style={userlist}>
                {data.users?
                   
                    <ul>
                        {tablerow}
                    </ul>
                    :null}
            </div>
        )
    }
}

const userlist ={
    width:"60%"
}
const listSt ={
    listStyle:"none",
    marginBottom: '10px',
    background: '#efeeee',
    paddingLeft: '24px',
    paddingTop: '10px',
    paddingBottom: '10px',
    boxShadow: '1px 1px 1px grey',
    borderRadius: '12px'
}
const mapstateToProps = state=>{
    return{
        userlist:state.search
    }
}


export default connect(mapstateToProps,null)(UserList);