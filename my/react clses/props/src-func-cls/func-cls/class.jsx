import React from 'react'


class Emp extends React.Component{
    render () {
        return (
            <div>
                <h1>Name : {this.props.name}</h1>
                <h2>Message : {this.props.msg}</h2>
            </div>
        )
        
    }
}

export default Emp

