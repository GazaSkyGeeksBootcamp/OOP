// Second Task: (Student System)
// 1. Create a Student constructor function with the following properties:
//     - name
//     - age
//     - grade
//     - introduce() method that logs a message like:

function Student(name, age) {
  this.name = name;
  this.age = age;

  const grade = null; // private proparity

    this.setGrade = function (grade) { // setter method
        if (grade == 'A' || grade == 'F') {
            this.grade = grade;
        }
        else {
            console.log("Grade must be A or F.");
        }
    }
  this.getGrade= function() {  
    return this.grade;
  }

}
  Student.prototype.introduce = function () { // use prototype 
   console.log(
       `Hi, my name is ${this.name}, I’m  ${this.age} years old and I’m in grade ${this.getGrade()}`
   );
  };


const student = new Student("Noor", 20);
student.setGrade('F');
student.introduce()

