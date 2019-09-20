 let getMyGrade =function(currentmark, totalScore){
    let myPercentage = (currentmark/totalScore)*100

    let myGrade =''
    
    if (myPercentage >=90){
        myGrade ='A'
    }else if(myPercentage >=80){        
        myGrade = 'B'
    }  else if(myPercentage >=70){        
        myGrade = 'C'
    } else if(myPercentage >=60){        
        myGrade = 'D'
    } else if(myPercentage >=50){        
        myGrade = 'E'
    } else{
        myGrade='F'
    }

    return `This is your ${currentmark} and your grade is: ${myGrade}` 
 }
  let myResult =getMyGrade(88,100)

  console.log(myResult)