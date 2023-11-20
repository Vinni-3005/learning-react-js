// conditional rendering simple example 
//here we are using {}-expression to write the JS code inside the render
// and also suing <></> - fragment to write the HTML code insdie the render

//case -1 : login button
import React from 'react'


class Condition extends React.Component {
    state = {
        islogin : false
    }
    render () {
        return <>
        {
            this.state.islogin ? <><button> Login </button></> :
            <><button> Log Out </button></>
        }
        
        </>
    }

}

export default Condition


//case -2 : logout 
/* write state = {
    islogin :false
}*/