function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let _grade;

  this.setGrade = function (newGrade) {
    if (newGrade === "A" || newGrade === "F") {
      _grade = newGrade;
    } else {
      console.error('Grade must be either "A" or "F".');
    }
  };

  this.getGrade = function () {
    return _grade;
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
