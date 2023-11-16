import React from 'react'
//import Axios from 'axios'

class Digiclock extends React.Component {
    constructor(props){
        this.state = {
            currentym : new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.state({
                cuurentym :new Date().toLocaleTimeString()
            })

        },1000)
            
    }
    render(){
        setInterval(()=>{

        },1000)
        return (
            <div>
                <h2>Digital Clock</h2>
                <h3>{this.state.ct}</h3>
            </div>
        )
    }
    
}

export default Digiclock