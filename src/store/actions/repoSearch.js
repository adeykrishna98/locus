import * as actionTypes from "./actionsTypes";
import axios from "axios";





export const repoUserStart = ()=>{
    return{
        type:actionTypes.repoStart
    }
}

export const repoUserSuccess = (data)=>{
    return{
        type:actionTypes.repoSuccess,
        data:data
    }
}

export const repoUserError = (error)=>{
    return{
        type:actionTypes.repoError,
        error:error
    }
}

export const repoSearch =(repo)=>{
    return dispatch =>{
        dispatch(repoUserStart());
        axios.get(`https://api.github.com/users/${repo}`)
        .then(response=>{
            dispatch(repoUserSuccess(response.data));
            console.log(response)
        })
        .catch(error=>{
           dispatch(repoUserError(error))
        })
    }
}