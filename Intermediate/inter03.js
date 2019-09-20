//for each loop in javascript
const days =['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

days.forEach(function(day, index){
console.log(`Days starts with ${index+1} -- ${day}`)
})

const Avengers =['Captain', 'Thor', 'Hulk', 'Ironman' ]

Avengers.forEach(function(hero, index){
    console.log(`Marvel hero ${index+1} -- ${hero}`)
})

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i])    
// }

for (let i = days.length-1; i >= 0; i--) {
    console.log(days[i])    
      
}