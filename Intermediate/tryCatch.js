 const convertToRS = (dollar)=> {
     if ( dollar === 'number') {
         return dollar * 5
     } else {
        throw Error ('Amount should be in number')
     }
 }


try {

    const myValue = convertToRS('five')

    console.log(myValue)    
} catch (error) {
    console.log(error)
}

console.log('I will not run if programm is crashed')