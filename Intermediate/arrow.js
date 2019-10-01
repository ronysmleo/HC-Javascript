// const sayHello = (name)=> `hi my name is ${name}`   

// console.log(sayHello('Rony'))
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

const thingsDone = newTodos.filter((todo) => todo.title === 'Go to Gym')

console.log(thingsDone)
