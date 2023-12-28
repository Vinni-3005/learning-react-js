import React from 'react'
import Emp from './class'

const Func = () => {
    let ename="Hiii"
    return <div>
        <h1>Functional to Class component</h1>
        <Emp name={ename} msg={"This is Aduri Vineetha"}/>
    </div>
}

export default Func