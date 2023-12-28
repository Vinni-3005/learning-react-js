import ReactDOM  from 'react-dom'

//ReactDOM.render(What to render , where to render)


//ReactDOM.render("Hello , GM", document.getElementById('root'))

//here we cant render 2 tags, we get an error i.e.,adjacent jsx elements must be wrapped in an enclosing tag
//therefore, we use div tag

//ReactDOM.render(<h1>"Hello"</h1><h2>World</h2>,document.getElementById('root'))

ReactDOM.render(<div><h1>"HELLO"</h1><h2>"WORLD"</h2></div>,document.getElementById("root"))