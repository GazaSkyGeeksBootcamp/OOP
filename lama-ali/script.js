function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let _grade = null;

  this.validateGrade = function (value) {
    return value === "A" || value === "F";
  };

  this.getGrade = function () {
    return _grade;
  };

  this.setGrade = function (value) {
    if (this.validateGrade(value)) {
      _grade = value;
    } else {
      console.error("Grade must be 'A' or 'F' only.");
    }
  };

  this.setGrade(grade);
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};

// Test
const student = new Student("Lama", 23, "A");
student.introduce(); // Hi, my name is Lama, I’m 23 years old, and I’m in grade A.

student.setGrade("F");
student.introduce(); // Hi, my name is Lama, I’m 23 years old, and I’m in grade F.

student.setGrade("B"); // Error: Grade must be 'A' or 'F' only.
