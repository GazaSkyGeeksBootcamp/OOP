function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let _grade = null;

  const validGrade = (value) => value === "A" || value === "F";

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`
    );
  };

  this.getGrade = function () {
    return _grade;
  };

  this.setGrade = function (value) {
    if (validGrade(value)) {
      _grade = value;
      return true;
    } else {
      console.error("Grade must be 'A' or 'F' only.");
      return false;
    }
  };
  if (!this.setGrade(grade)) {
    _grade = null;
  }
}

// Test
const student = new Student("Lama", 23, "A");
student.introduce(); // Hi, my name is Lama, I’m 23 years old, and I’m in grade A.
student.setGrade("F");
student.introduce(); // Hi, my name is Lama, I’m 23 years old, and I’m in grade F.
student.setGrade("B"); // Error + false
