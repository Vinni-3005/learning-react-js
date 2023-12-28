//react is based on component architecture
//components & components files tart with capital letters
//Components - describes the User Interface(UI), peace of reusable code of UI
//once component is created , we can use n no.of times
//they are 2 types of components i.e.,
   // 1. Functional component - fat arrow func md normal func
   // 2. class component



import Header from './components/header'
import Footer from './components/footer'
import Service from './components/service'

let App=()=>{         // it is functional component lo fat arrow func
    return <div>
        <nav className='navbar navbar-dark bg-dark'>
            <a href='#' className='navbar-brand'>Functional Component example</a>

        </nav>
        <Header/>
        <Footer/>
        <Service/>
    </div>
}
export default App
   
   