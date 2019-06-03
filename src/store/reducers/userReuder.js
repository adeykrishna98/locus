import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from './utility';

const initialState = {
    users: null,
    error: null,
};

const userStart = ( state, action ) => {
    return updateObject( state, { error: null} );
};

const userSuccess = (state, action) => {
    return updateObject( state, { 
        users: action.data,
        
     });

};

const userFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.searchStart: return userStart(state, action);
        case actionTypes.searchSuccess: return userSuccess(state, action);
        case actionTypes.searchError: return userFail(state, action);
        default:
            return state;
    }
};
export default reducer;