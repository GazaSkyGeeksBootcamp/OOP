// Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  // private grade
  let _grade = validateGrade(grade) ? grade : "F";

  // getter
  this.getGrade = function() {
    return _grade;
  };

  // setter with validation
  this.setGrade = function(newGrade) {
    if (validateGrade(newGrade)) {
      _grade = newGrade;
    } else {
      console.log("Invalid grade! Only A or F allowed.");
    }
  };

  // introduce method
  this.introduce = function() {
    console.log(
      `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`
    );
  };

  // helper function
  function validateGrade(g) {
    return g === "A" || g === "F";
  }
}

// Example usage
const student1 = new Student("Misam", 24, "A");
student1.introduce(); 
console.log(student1.getGrade());
student1.setGrade("F");
student1.introduce(); 
student1.setGrade("B"); 
