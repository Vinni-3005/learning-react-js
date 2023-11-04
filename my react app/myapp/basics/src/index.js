//ReactDOM.render(What you want to render, where you want to render)

import ReactDOM from 'react-dom'
import App from './App'


//ReactDOM.render("Hello,World",document.getElementById('root'))

//ReactDOM.render(<h1>Hello world!</h1><h2>Welcome</h2>,document.getElementById('root'))
//we could not render the 2 tags simultaneoulsy, we get an err i.e., adjacent jsx elements must be wrapped in an enclosing tag
//therefore , we must enclose the 2 tags in div tag

//ReactDOM.render(<div><h1>Hello....</h1><h2>Good Morning</h2></div>,document.getElementById('root'))


ReactDOM.render(<App/>,document.getElementById('root'))