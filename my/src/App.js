import React, {Component} from 'react'
import Message from './buttons/user'
import {store} from './redux/store'
import {Provider} from 'react-redux'



class App extends Component {
  render () {
    return (
      <div>
      <Provider store ={store}>
        <h1> Redux Example </h1>
        <hr/>
        <Message/>
      </Provider>
        
        
    </div>

    )
  }
}

export default App