function Student(name = "Ali", age = 20, gradeInput = "A") {
  this.name = name;
  this.age = age;
  let grade = gradeInput;

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${grade}.`
    );
  };
  this.getGrade = function () {
    return grade;
  };
  this.setGrade = function (newGrade) {
    newGrade = newGrade.toUpperCase();
    switch (newGrade) {
      case "A":
      case "B":
      case "C":
      case "D":
      case "E":
      case "F":
        grade = newGrade;
        break;
    }
  };
}
// test if i can make it also in proto 
// but notice that the private property cann't access direct here
Student.prototype.introduce2 = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};
const std1 = new Student();
std1.introduce();
std1.age = 24;
std1.name = "Sadeg";
std1.setGrade("C");
std1.introduce();
std1.setGrade("G");
std1.introduce2();
