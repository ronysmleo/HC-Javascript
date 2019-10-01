let myTodo ={
    day: 'Tuesday',
    meeting: 0,
    meetDone: 0,

    addMeeting: function (meetNum=0) {
        this.meeting = this.meeting + meetNum
    },

    meetingFinish: function (meetNum = 0) {
      this.meetDone = this.meetDone + meetNum  
    },

    summary : function () {
        //let meetleft =  this.addMeeting - this.meetingFinish
        return `I have ${this.meeting-this.meetDone} meetings today`
    }

}

myTodo.addMeeting(5)
myTodo.meetingFinish(2)
console.log(myTodo.summary());