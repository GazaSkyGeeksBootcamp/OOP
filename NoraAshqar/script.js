function Student(name, age, gradeVal){
  this.name= name;
  this.age= age;
  let grade= gradeVal;

  this.setGrade= function(newGrade){
    if (newGrade === "A" || newGrade === "F") {
      grade = newGrade;
    } else {
      console.log("Invalid grade,please enter A or F");
    }
  };
  this.getGrade= function () {
    return grade;};

  this.introduce= function(){
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${grade}.`);
  };
}


const student= new Student("Nora",20,"A");
student.introduce(); 
student.setGrade("F");
console.log(student.getGrade());