import React from 'react'


class Class2 extends React.Component{
    render (){
        return (
            <div>
                <h3>Name : {this.props.user.name}</h3>
                <h3>Email : {this.props.user.email}</h3>
                <h3> Location : {this.props.Location}</h3>
            </div>
        )
    }
}

export default Class2