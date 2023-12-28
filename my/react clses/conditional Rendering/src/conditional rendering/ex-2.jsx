

/* creating handlers for 2 different buttons , so that whenever user clicks the button ,
the value is going to be updates */


import React from 'react'


class MultipleHandler extends React.Component {
    state = {
        isLogin : true,
        Message : ""
    }
    loginHandler = () => {
        this.setState({ isLogin:true , Message : 'Login Succesfull'})
    }
    logoutHandler = () => {
        this.setState ({ isLogin :false , Message : 'logout succesful-Thank You'})
    }
    render () {
        return <div>
        {
            !this.state.isLogin ? <><button onClick={this.loginHandler}> Login </button></> :
            <><button onClick={this.logoutHandler}>Log Out </button></>
        }
        <hr/>
        <h4>{this.state.Message}</h4>
        
        </div>
        
    }

}
export default MultipleHandler
