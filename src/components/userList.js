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
        let tablerow;
        if(data.users){
            console.log(data.users.items)
            tablerow = data.users.items.map(item=>{
                return(
                    <TableRow key={item.login}>
                        <TableCell align="left">{item.login}</TableCell>
                        <TableCell align="right">
                        <Typography>
                    <Link href={item.login} >
                    {item.repos_url}
                    </Link>
      
          </Typography>
                            
                            
                           </TableCell>
                    </TableRow>
                )
            })
        }
        return(
            <div style={userlist}>
                Searched user list
                <Table >
                    <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Url Link</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {tablerow}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const userlist ={
    width:"60%"
}
const mapstateToProps = state=>{
    return{
        userlist:state.search
    }
}


export default connect(mapstateToProps,null)(UserList);