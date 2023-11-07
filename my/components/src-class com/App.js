import React from 'react'


/* we cannot write the stateent directly,
eg : 
     class Order{
        return <div>
            <h1>Order component</h1>
        </div>
     }

export default Order
 here we get an syntax error , therefore we require a func or method */

class App extends React.Component{
    render(){
        return <div>
            <h1>Class Component</h1>
        </div>
    }
}

export default App

//we can't create obj also , therefore we use extend i.e., inheritance
/* why you are extending react component?
   Component "extends" your component to the React library and allows your component 
   to use all functions (as in JavaScript functions) contained within the React library.

*/
// we can't write retuen statement directly , therefore we are creating one method

   