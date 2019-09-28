let dailyTodos ={
    day : 'TuesDay',
    task : 0,
    taskDone : 0
}

let taskTodo = function (task01, taskNum = 0) {
    task01.task = task01.task+ taskNum
}

let taskFinish = function (task02, taskNum = 0) {
     task02.taskDone = task02.taskDone +taskNum
}

let resetTask = function (taskReset) {
    taskReset.task = 0,
    taskReset.taskDone = 0
}

let getSummaryOfTheTask = function (totalTask) {
    let taskLeft = totalTask.task - totalTask.taskDone
    return `I have ${taskLeft} tasks left`
}

taskTodo(dailyTodos, 5)
taskFinish(dailyTodos, 2)

console.log(getSummaryOfTheTask(dailyTodos))

resetTask(dailyTodos)