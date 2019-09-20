let myTodos={
    day: 'Monday',
    meeting: 0,
    meetdone:0
}

let addMeeting =function(todo, meet=0){
    todo.meeting=todo.meeting+meet
}


let meetingDone =function(todo, meet=0){
    todo.meetdone=todo.meetdone+meet
}


let resetDay =function(todo){
    todo.meeting=0
    todo.meetdone=0
}

let summaryOfTheDay =function(todo){
    let meetingLeft = todo.meeting-todo.meetdone
    return `You have ${meetingLeft} meeting left`
}

addMeeting(myTodos, 6)
meetingDone(myTodos, 5)
console.log(myTodos)

console.log(summaryOfTheDay(myTodos))