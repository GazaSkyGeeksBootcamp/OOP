function validateGrade(grade) {
  if (grade.toUpperCase() === "A" || grade.toUpperCase() === "F") {
    return grade.toUpperCase();
  }
  throw new Error("Grade should be only (A) or (F)");
}

function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  let privateGrade = validateGrade(grade);

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${privateGrade}.`
    );
  };

  this.getGrade = () => privateGrade;

  this.setGrade = (grade) => {
    privateGrade = validateGrade(grade);
  };
}

const firstStudent = new Student("Ali", 21, "A");

firstStudent.introduce();
console.log(firstStudent.getGrade()); // A
console.log(firstStudent.grade); // undefined
console.log(firstStudent.getGrade()); // F

// firstStudent.setGrade("C"); // Error

const secondStudent = new Student("Hamza", 23, "D"); // Error grade ="D"
