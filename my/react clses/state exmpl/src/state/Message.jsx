import React from 'react'

class Message extends React.Component{
    msg='HELLO'

    gmHandler =() => {
        this.forceUpdate = "gm"
    }
    
    render () {
        return ( 
            <div>
                <button onClick={this.gmHandler}>Good Morning</button>
            </div>   
            )
    }

}


export default Message


/*{this.gmhandler()-- we should not invoke the function , if we invoke it , it will automatically execute
without clicking } */