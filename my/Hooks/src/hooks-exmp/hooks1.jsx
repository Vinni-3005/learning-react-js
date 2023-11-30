// Example -1 using useEffect hook
// need to create one login form i.e., registartion button is disabled untill user clicks the checkbox


import React, {useRef} from 'react'
//import './one.css'
//import styles from "./one.css";

let Register = () => {

    // why we are passing null as arg ?
    /* when we first call useRef , it does not have access to elemnt and it will
    only have access to elemnt after the first render, so are passing null as arg */

    let btnRef = useRef(null) 

    let termscondHandler = (event) => {
    btnRef.current.disabled = !event.target.checked

}
return <>
<h1>Registration Page</h1>
<form>
    <label>Email: </label>
    <input type="email"/><br/><br/>
    <label>Password :</label>
    <input type="password"/><br/><br/>
    <label>Mobile No :</label>
    <input type="telephone number"/><br/><br/>
    <input type="checkbox" onClick = {termscondHandler}/> Please Accept Terms & Conditions <br/><br/>
    <input type="submit" value="Register" disabled ref={btnRef}/>
</form>

</>

}

export default Register




