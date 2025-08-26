// Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  let _grade = grade;

  this.introduce = function () {
    console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`);
  };

  this.getGrade = function () {
    return _grade;
  };

  this.setGrade = function (newGrade) {
    if (newGrade === "A" || newGrade === "F") {
      _grade = newGrade;
    } else {
      console.log("Invalid grade! Grade can only be 'A' or 'F'.");
    }
  };
}

const student1 = new Student("Tala", 22, "A");
student1.introduce(); 

console.log(student1.getGrade());
student1.setGrade("F");
console.log(student1.getGrade()); 
student1.setGrade("B");
