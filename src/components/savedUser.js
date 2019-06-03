import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class Saveduser extends React.Component{

    state = {
        users:[]
    }
    // componentDidMount(){
       
        
    //     console.log(users)
        
    // }
    render(){
        var tablerow;
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        if(users){
            tablerow = users.map(item=>{
                return(
                    <TableRow key={item}>
                        
                        <TableCell align="left">
                        <Typography>
                    <Link href={item} >
                    {item}
                    </Link>
      
                  </Typography>
                            
                            
                    </TableCell>
                    </TableRow>
                )
            })
        }
        return(
            <div style={userlist}>
                Saved users
                <Table >
                    <TableHead>
                    <TableRow>
                        <TableCell>usernames</TableCell>
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
    width:"30%",
    margin:"auto"
    ,
    marginLeft: "100px"
}

export default Saveduser;