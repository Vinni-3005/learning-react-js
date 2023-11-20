//intsead of using multiplehandlers , we can bind it to the one handler

import React from 'react'

class Onehandler extends React.Component{
    state = {
        islogin : true,
        message : " "
    }
    UpdateHandler = () => {
        this.setState ({
            islogin : !this.state.islogin,
            message : "Welcome"

        })
    }
    render () {
        return <div>
            {
                this.state.islogin ? <><button onClick = {this.UpdateHandler}> Login </button></> :
                <><button onClick = {this.UpdateHandler}> Log out </button></>
            }

            <h3>{this.state.message}</h3>
        </div>
    }

}

export default Onehandler