const myTodos =[]

myTodos.push ('Go to work')
myTodos.push ('Go to Gym')
myTodos.push ('Do groceries')

// myTodos.forEach(function(todo, index){
//    console.log(`Your task is ${index+1} ${todo}`);
    
// })
for (let i = 0; i < myTodos.length; i++) {
     console.log(myTodos[i])
}

for(let i=myTodos.length-1; i>=0; i--){
    console.log(myTodos[i])
}