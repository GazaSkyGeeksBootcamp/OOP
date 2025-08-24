function Students(name,age,grade){
    this.name=name;
    this.age=age;
    let stdGrade=grade;

    this.setGrade=function (value) {
        if (value === "A" || value === "F") {
            stdGrade = value;
        } else {
            stdGrade = "Not graded yet";
            console.log("Invalid grade! Must be A or F.");
           
        }
    }
      this.getGrade = function() {
        return stdGrade;
    }
    this.setGrade(grade);
}
Students.prototype.introduce= function (){ 
    console.log(` Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGrade()}. `)
 }
  const student= new Students("raghad",21,"F"); 
  student.introduce();
