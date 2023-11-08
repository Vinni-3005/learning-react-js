import React from 'react'
import Class2 from './cls2'

class Class1 extends React.Component{
    user={
        name : "vineetha",
        email : "vinni@gmail.com"
    }

    render (){
        return (
            <div>
                <h2> Class to Class Component</h2>
                <Class2 user={this.user} Location={"Banglore"} />
            </div>
        )
    }
}

export default Class1