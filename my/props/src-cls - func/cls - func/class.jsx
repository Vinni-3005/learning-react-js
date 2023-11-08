import React from 'react'
import Func1 from './func-1'

class Emp extends React.Component{
    user = {
        name : "Vineetha",
        msg : "Welcome ",
    }

    render () {
        return <div>
            <h1>Class component</h1>
            <Func1 user ={this.user} message={this.user} loc= {"banglore"}/>
        </div>
    }

}

export default Emp