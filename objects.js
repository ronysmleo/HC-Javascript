// let myYoutube = {
//     title : 'Loops',
//     length : 30,
//     Author : 'Rony' 
// }

// console.log(myYoutube.Author)

// // Change the Poperty value in a object

// myYoutube.Author='Jony',
// myYoutube.title = 'Function'
// console.log(myYoutube.Author)
// console.log(myYoutube.title)
//******************************************************************* */
// let myYoutube = {
//     title : 'Loops',
//     length : 30,
//     Author : 'Rony' 
// }

// let changeLength=function (videoLength) {
//     console.log(`Change my video length to ${videoLength.length}`)

// }
// changeLength(myYoutube)

// let changeLength=function (myLength) {
//     return `this is new length ${myLength.length+5}`
// }

// console.log(changeLength(myYoutube))

// let changeAuthor=function (myAuthor) {
//     return `Thsis is new Author ${myAuthor.Author}`
// }
// myYoutube.Author = 'Jony'

// console.log(changeAuthor(myYoutube))

let myYoutube = {
    title : 'Loops',
    length : 30,
    Author : 'Rony' 
}

let changeLength=function (myLength) {
    return{
        formatOne: `This is new length ${myLength.length+5}`,
        formatTwo: `This is new length ${myLength.length+10}`,
        formatThree: `This is new length ${myLength.length+15}`,
        formatFour: `This is new length ${myLength.length+20}`

    }
}
let ad01= changeLength(myYoutube)
console.log(`This is format one ${ad01.formatOne}`)
console.log(`This is format two ${ad01.formatTwo}`)
console.log(`This is format three ${ad01.formaThree}`)
console.log(`This is format four ${ad01.formatFour}`)

















