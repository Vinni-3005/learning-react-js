
//reducer ia pre func , that takes 2 parameters i.e., state and Action objects
//it decides how to  update the state if necessary and returns the new state

// reducer is an event listener which handles events based on received action(event) type

import {GM,GN} from './message.action'

let initiaSate = {
    msg : 'Hello'
}

let messageReducer = (state=initialState, action) => {
    switch(action.type){
        case "GM" :
            return { msg : "Good Morning"}
        case "GN" :
            return { msg : "Good Night"}
        default :
        return state;
    }
}

export {messageReducer}