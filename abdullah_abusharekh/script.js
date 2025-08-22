"use strict";

function Student(name, age, initialGrade) {
  this.name = name;
  this.age = age;
  let grade;

  this.getGrade = function () {
    return grade;
  };

  this.setGrade = function (newGrade) {
    if (newGrade === "A" || newGrade === "F") {
      grade = newGrade;
    } else {
      console.log("Invalid grade. Only A or F allowed.");
    }
  };

  if (initialGrade !== undefined) {
    this.setGrade(initialGrade);
  }

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${grade}.`
    );
  };
}

const student1 = new Student("Ali", 20, "A");
student1.introduce();
// Hi, my name is Ali, I'm 20 years old, and I'm in grade A.
student1.setGrade("B");
// Invalid grade. Only A or F allowed.
