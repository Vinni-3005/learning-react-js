import React from 'react'


const Message = () => {
    let dispatch = useDsipatch() // first we will dispatch an action by using usedispatch
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