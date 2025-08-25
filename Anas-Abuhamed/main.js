function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    let _grade = null;
    function validateGrade(grade) {
        return (grade === "A" || grade === "F");
    }
    if (validateGrade(grade)) {
        _grade = grade;
    }
    this.introduce = function () {
        if (_grade === null) {
            console.log("Invalid grade. Please enter either 'A' or 'F'.");
            return;
        }
        console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`);
    }
    this.getGrade = function () {
        return _grade;
    }
    this.setGrade = function (grade) {
        if (validateGrade(grade)) {
            _grade = grade;
        } else {
            console.log("Invalid grade. Please enter either 'A' or 'F'.");
        }
    }
}
// const student = new Student("Anas", 22, "F");
// console.log(student.name);
// console.log(student.age);
// console.log(student.getGrade());
// student.introduce();
// student.setGrade("C");
// console.log(student.getGrade());
