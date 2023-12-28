import React from 'react'
import FuncB from './Func B'

const FuncA=()=>{
    let ename="Vinitha"
    return <div>
        <h1> First Function Component</h1>
        <FuncB name={ename} id={1234} msg={"Hello , Vinitha"}/>
    </div>

}

export default FuncA