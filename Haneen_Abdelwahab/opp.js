function StudentDetails(name,age,grade){
    this.name=name
    this.age=age
    let _grade //raw

    function validateGrade(value) {
        return value === "A" || value === "F"
    }

    if (validateGrade(grade)){
        _grade=grade
    } else {
        _grade=undefined
    }

    this.introduce=function (){
        console.log(`Hi, my name is ${name}, I’m ${age} years old, and I’m in grade ${_grade}`)
    }

    this.getGrade=function (){
        return _grade
    }
    
    this.setGrade=function (value) {
    if (validateGrade(value)) {
      _grade = value
    } else {
      console.log("Invalid grade! Only A or F is allowed.")
      _grade=undefined
    }
    }}

/*
const studentInstance=new StudentDetails("Haneen" , 24 , "c")
studentInstance.introduce()
studentInstance.setGrade("c")
studentInstance.introduce()
*/