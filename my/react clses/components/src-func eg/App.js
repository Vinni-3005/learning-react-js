import React from 'react'

function App() {
    let msg="Hello , Welcome to the web technologies"

    let employee={
        eid:'1234',
        ename:"vinni",
        eloc:"banglore",
        esal:"35000"
    }
    return <div>
        <h1>Function Component</h1>
        <h2>msg={msg}</h2>
        <h3>{10+30}</h3>
        <h4>employee details:{employee.eid}</h4>
        <h4>employee details:{employee.ename}</h4>
        <h4>employee details:{employee.eloc}</h4>
        <h4>employee details:{employee.esal}</h4>
    </div>

}

export default App