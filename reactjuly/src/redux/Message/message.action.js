const GM="GM";
const GN='GN'
let gmAction = ()=>{
    console.log("Action Invoking..GM Action")
    return { type:GM}
}
let gnAction = ()=>{
    return {type:GN}
}


export {gmAction, gnAction, GM,GN}

//Redux action is function, it return actionable obj