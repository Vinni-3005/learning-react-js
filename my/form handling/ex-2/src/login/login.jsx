//intead of creating multiple handlers , write one handler

/*import React from 'react'
import {useState} from 'react'

let Login = () => {
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');

    let emailHandler= (event) => {
        setUser({...user,email:event.target.value}) //we doing hardcoding
    }
    let psHandler = (event) =>{
        setUser({...user,password:event.target.value}) //hardcoding
    }

    let updateHandler = (event) => {
        let {email , password} = event.target
        
    }
    return (
        <div>
            <pre>{JSON.stringify({email , password})}</pre>
            <form>
                <label>Email</label>
                <input type="email" onChange={updateHandler}/><br></br>
                <label>Password</label>
                <input type="password" onChange={updateHandler}/><br></br>
                <input type="submit" value="login"/>
            </form>
        </div>
    )

}
export default Login */

import React ,{Component} from 'react'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {email:"", password:" "}
    }
    updatehandler = (event) => {
        //this.setState({email:event.target.value})  
        
        /*here we have written emil:event,target.value, it will update olly email whenver user enters
        email nd password , therefore , change it to [event.target.name] */

        this.setState({[event.target.name]:event.target.value})

        //here we are using 
    }  
    render () {
        return <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
            <lable>Email</lable>
            <input type='email' name="email" onChange={this.updatehandler}/><br/><br/>
            <label>Password</label>
            <input type='password' name="password" onChange={this.updatehandler}/><br/><br/>
            <input type='submit' value='Login'/>
        </form>
        
        </>
    }
}

export default Login