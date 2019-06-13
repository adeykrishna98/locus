import React,{Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { connect } from "react-redux";
import * as actions from '../store/actions/index';


class Navbar extends Component{
    searchhandler =(event)=>{
        if(event.target.value.length>3){
            console.log(event.target.value);
            this.props.search(event.target.value)
        }
    }
    render(){
        return(
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography style={topogra}>
                            locus
                        </Typography>
                        <div style={searchbar}>
                        <Input style={search} placeholder="search name" onChange={(event)=>this.searchhandler(event)} />
                        </div>
                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


const topogra ={
    marginLeft:"200px"
}
const searchbar ={
    display:"block",
    marginLeft:"40%"
}
const search ={
   
   color:"white",
    width: "300px",
    borderRadius: "4px",
    padding: "8px",
}

const mapStateToprops = state =>{
    return{} 
}
const mapDispatchToProps = dispatch=>{
    return{
        search:(searchuser)=>dispatch(actions.searchuser(searchuser))
    }
}
export default connect(null,mapDispatchToProps)(Navbar);