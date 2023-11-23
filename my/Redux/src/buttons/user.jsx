import React from 'react'
import {gmAction , gnAction , GM, GN} from '../redux/message/message.action'
import {useDispatch, useSelector} from 'react-redux'

const Message = () => {
    let dispatch = useDispatch() // first we will dispatch an action by using usedispatch
    let message = useSelector((state) =>{
        return state
    })
    //create handler to handle the buttons
    let gmHandler = () => {
        //disptach redux action
        dispatch(gmAction)
    }
    let gnHandler = () => {
        dispatch(gnAction)
    }

    //return the UI component

    return (
        <div>
            <button onClick={gmHandler}>Good Morning</button>
            <button onClick={gnHandler}>Good Night</button>
        </div>
    )
}

export default Message