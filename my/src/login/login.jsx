
/*here we cant directly write a variables becoz the values are going to change everytime,
therefore we use useState hook which returns destructed array[var,func]*/
//emailAhnlder expects () => {} which returns one obj


//dont hardcode , becoz whenever user enter the valur , it only takes input given at the hardcoding level,
// therefore go for the event and event.target.value

/*In React, event.target.value is the value of the HTML element that triggered the event.
 It is a property of the event object that is passed to the event handler function.
for example, if you have an input element in React, you can add an onChange listener
to it to listen for change events. When the user changes the value of the input element,
the event object that is passed to the handler function will have the event.target property
which is a reference to the input element that was changed. You can then use the event.target.value 
property to get the new value of the input element. */

import React from 'react'
import {useState} from 'react'

let Login = () => {
    let[user,setUser]=useState({email:" ", password:" "})

    let emailHandler= (event) => {
        setUser({...user,email:event.target.value}) //we doing hardcoding
    }
    let psHandler = (event) =>{
        setUser({...user,password:event.target.value}) //hardcoding
    }
    return (
        <div>
            <pre>{JSON.stringify(user)}</pre>
            <form>
                <label>Email</label>
                <input type="email" onChange={emailHandler}/><br></br>
                <label>Password</label>
                <input type="password" onChange={psHandler}/><br></br>
                <input type="submit" value="login"/>
            </form>
        </div>
    )

}
export default Login