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
        axios.get(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`)
        .then(response=>{
            console.log(response.data,">>>>>")
            var newArray = []
            for(let i=0;i<response.data.length;i++){
                if(response.data[i].name.includes(userdata)){
                    newArray.push(response.data[i])
                }
            }
            dispatch(searchUserSuccess(newArray));
           
        })
        .catch(error=>{
           dispatch(searchUserError(error))
        })
    }
}