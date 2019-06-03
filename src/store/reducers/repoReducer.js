import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from './utility';

const initialState = {
    repo: null,
    error: null,
};

const repoStart = ( state, action ) => {
    return updateObject( state, { error: null} );
};

const repoSuccess = (state, action) => {
    return updateObject( state, { 
        repo: action.data, 
     });

};

const repoFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.repoStart: return repoStart(state, action);
        case actionTypes.repoSuccess: return repoSuccess(state, action);
        case actionTypes.repoError: return repoFail(state, action);
        default:
            return state;
    }
};
export default reducer;