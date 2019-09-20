let myVideo01 ={
    title:'Javascript',
    length: 20
}

let myVideo02 ={
    title:'React',
    length: 40
}
let myVideo03={
    title:'Jquery',
    length: 30
}

let changeLength=function(myLength){
    return{
        offer01:`Update the length ${myLength.length} to ${myLength.length+5}`,
        offer02:`Update the length ${myLength.length} to ${myLength.length+10}`,
        offer03:`Update the length ${myLength.length} to ${myLength.length+15}`,
        offer04:`Update the length ${myLength.length} to ${myLength.length+20}`
    }
}
let proposal01=changeLength(myVideo01)
console.log(proposal01.offer01)
let proposal201=changeLength(myVideo02)
console.log(proposal201.offer02)
let proposal301=changeLength(myVideo03)
console.log(proposal301.offer03)