// Task 2
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let _grade = grade;
  if (_grade !== "A" && _grade !== "F") {
    _grade = "F";
  }

  this.getGrade = function () {
    return _grade;
  };
  this.setGrade = function (newGrade) {
    if (newGrade == "A" || newGrade == "F") {
      _grade = newGrade;
    } else {
      console.log("the grade should be only A or F");
    }
  };
}
Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};
const student = new Student("Ghaida", 21, "A");
student.introduce();
console.log(student.getGrade());
student.setGrade("F");
student.introduce();
student.setGrade("C");
