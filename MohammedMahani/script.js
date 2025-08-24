function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  let _grade = grade === "A" || grade === "F" ? grade : "F";

  this.introduce = function () {
    console.log(
      "Hi, my name is " +
        this.name +
        ", I’m " +
        this.age +
        " years old, and I’m in grade " +
        _grade +
        "."
    );
  };

  this.getGrade = function () {
    return _grade;
  };

  this.setGrade = function (newGrade) {
    if (newGrade === "A" || newGrade === "F") {
      _grade = newGrade;
    } else {
      console.log("Invalid grade! Only 'A' or 'F' allowed.");
    }
  };
}

let student1 = new Student("Ali", 20, "A");
student1.introduce();
student1.setGrade("F");
student1.introduce();
student1.setGrade("B");
console.log(student1.getGrade());
