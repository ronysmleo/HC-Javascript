let myTodos={
    day: 'Monday', 
    meeting: 0,
    meetDone: 0,
}

let addmeeting=function (todo, meet=0) {
    todo.meeting= todo.meeting+meet
}


let meetingDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone+meet
}


let resetDay = function (todo) {
    todo.meeting = 0,
    todo.meetDone = 0
}

let getSummaryOftheDay = function (todo) {
    let meetingLeft = todo.meeting - todo.meetDone
    return `you have ${meetingLeft} meetings today`
}

addmeeting(myTodos, 5)
addmeeting(myTodos, 7)
meetingDone(myTodos, 6)

console.log(getSummaryOftheDay(myTodos))


