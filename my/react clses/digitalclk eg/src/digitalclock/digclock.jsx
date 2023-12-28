 import React from 'react'
//import Axios from 'axios'

class Digiclock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentym : new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                currentym :new Date().toLocaleTimeString()
            })

        },1000)
            
    }
    render(){
        setInterval(()=>{

        },1000)
        return (
            <div>
                <h2>Digital Clock</h2>
                <h3>{this.state.currentym}</h3>
            </div>
        )
    }
    
}

export default Digiclock 


