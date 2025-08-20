function Student(name, age, initialGrade) {
  this.name = name;
  this.age = age;
  let _grade;

  this.setGrade = function (grade) {
    if (grade === "A" || grade === "F") {
      _grade = grade;
    } else {
      console.error("Grade must be A or F.");
    }
  };
  this.getGrade = function () {
    return _grade;
  };

  this.setGrade(initialGrade);

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`
    );
  };
}

const s1 = new Student("anas", 21, "F");
console.log(s1);

s1.introduce();
console.log(s1.age);
console.log(s1.name);
// console.log(s1._grade); //Error

s1.setGrade("F");
console.log(s1.getGrade());

// s1.setGrade("B"); Error
