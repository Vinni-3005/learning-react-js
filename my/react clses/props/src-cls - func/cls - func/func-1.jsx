import React from 'react'

const Func1 = (props) => {
    return <div>
        <h1>Functional component</h1>
        <h2> Name : {props.user.name}</h2>
        <h2> Message : {props.user.msg} </h2>
        <h3> Location : { props.loc}</h3>
    </div>
}

export default Func1