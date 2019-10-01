//const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube vidoes']

//console.log(myTodos.indexOf('Buy Bread'))

const newTodos=[{
    title: 'Buy Bread',
    isDone: false,
},
{
    title: 'Go to Gym',
    isDone: false,

},
{
    title: 'Record youtube vidoes',
    isDone: true,
}]

// const myIndex = newTodos.findIndex(function (todo) {
//     console.log(todo)
//     return todo.title === 'Go to Gym'
// })

// console.log(myIndex)



const findTodo = function (myTodos, title) {
    const index= myTodos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

const printMe =  findTodo(newTodos, 'GO to gym') 


console.log(printMe)
