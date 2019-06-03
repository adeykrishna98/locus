import React,{Component} from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actions from '../store/actions/index';
import { connect } from "react-redux";

class RepoDetail extends Component{


    componentDidMount(){
        this.props.repo(this.props.match.params.user)
    }


    userHandler =(data)=>{
        console.log(data)
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        console.log(users.indexOf(data))
        if(users.indexOf(data) == -1){
            users.push(data)
            localStorage.setItem("users", JSON.stringify(users));
        }
    }


    removeHandler =(data)=>{
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        if(users.indexOf(data) >= 0){
            users.splice(users.indexOf(data), 1);
           localStorage.setItem("users", JSON.stringify(users));
        }
    }
    render(){
        console.log(this.props.userProfile);
        let card;
        let user_profile = this.props.userProfile;
        if(user_profile.repo){
            card =    <Card >
            <CardActionArea>
              <CardMedia
                image={user_profile.repo.avatar_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user_profile.repo.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user_profile.repo.bio}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user_profile.repo.blog}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user_profile.repo.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user_profile.repo.created_at}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user_profile.repo.html_url}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>this.userHandler(user_profile.repo.login)}>
                save
              </Button>
              <Button size="small" color="primary" onClick={()=>this.removeHandler(user_profile.repo.login)}>
                remove
              </Button>
            </CardActions>
          </Card>
        }
        return(
            <div style={userlist}>
                user details

            {card}

                {/* <Table >
                    <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Created time</TableCell>
                    </TableRow>
                    </TableHead>
                </Table> */}
            </div>
        )
    }
}

const userDetails={
    width: "80%",
    margin: 'auto',
    marginTop:"100px",
    display: "-webkit-inline-box",
    marginLeft: "10%"
  }

  const userlist ={
    margin: "auto",
    marginTop: "100px",
    width: "90%",
}



const mapStateToprops = state =>{
    return{
        userProfile:state.repo
    } 
}
const mapDispatchToProps = dispatch=>{
    return{
        repo:(userRepo)=>dispatch(actions.repoSearch(userRepo))
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(RepoDetail);