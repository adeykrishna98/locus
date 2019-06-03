import * as actionTypes from "./actionsTypes";
import axios from "axios";





export const searchUserStart = ()=>{
    return{
        type:actionTypes.searchStart
    }
}

export const searchUserSuccess = (data)=>{
    return{
        type:actionTypes.searchSuccess,
        data:data
    }
}

export const searchUserError = (error)=>{
    return{
        type:actionTypes.searchError,
        error:error
    }
}

export const searchuser =(userdata)=>{
    return dispatch =>{
        dispatch(searchUserStart());
        axios.get(`https://api.github.com/search/users?q=${userdata}`)
        .then(response=>{
            dispatch(searchUserSuccess(response.data));
            console.log(response)
        })
        .catch(error=>{
           dispatch(searchUserError(error))
        })
    }
}