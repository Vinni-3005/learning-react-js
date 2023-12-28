import React from 'react'

class State extends React.Component {
    state = {
        msg :'Hello'
    }
    gmHandler = () => {
        this.setState({msg:'GM'})
    }
    render () {
        return (
            <div>
                <button onClick={this.gmHandler}>Good Morning</button>
            </div>
        )
    }
}

export default State