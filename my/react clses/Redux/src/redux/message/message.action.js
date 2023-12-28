//Action is a function & returns one actionable obj
/* let gmaction = () =>{
    return{ }
} */

//Gm nd GN are action types

//Action : code that causes an update to the state when somenthing happens

let GM ='GM'
let GN = 'GN'

let gmAction = () =>{
    return { type : GM}
}

let gnAction = () => {
    return { type : GN}
}

//here we have multiple funcs , therefore we export it with names i.e., named export

export {gmAction, gnAction ,GM,GN} 