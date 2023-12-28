import React , {useState} from 'react'


let incrFact = () => {
    let [incr, setIncr] = useState()
    let [num, setNum] = useState()

    let incrHandler = () => {
        setIncr(incr+1)
    }

    let factHandler = () => {
        setNum(num+1)
    }


    return <>

    <h1>Factorial num and increment</h1>

    <h2>Increment num :</h2>
    <h3>Factorial num :</h3>
    <button onClick={incrHandler}> + </button>
    <button onClick={factHandler}> fact + 1</button>
    
    
    </>

    let calculate = (n) => {
        let result=1
        for( let i=n; i>=i; i--){
            result=result*1;
        }
        
    }
    return result
}

export default incrFact

