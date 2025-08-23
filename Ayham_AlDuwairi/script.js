function Student(name, age, propGrade) {
    let grade;
    this.setGrade = function (newGrade) {
        if (newGrade === 'A' || newGrade === 'F') {
            grade = newGrade;
        } else {
            console.log("Invalid grade. Please enter either 'A' or 'F'");
            return;
        }
    }

    this.getGrade = function () {
        return grade;  
    }
    this.name = name;
    this.age = age;
    this.setGrade(propGrade);
    this.introduce = function () {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.getGrade()}.`);
    }
}

let student = new Student("Alice", 20, "A");
student.introduce(); // that will work fine

student.setGrade('F');
student.introduce(); // that will work fine, now the grade is F

student.grade = 'A';
student.introduce(); // that will not work, because grade is private

student.setGrade('B'); // Invalid grade. Please enter either 'A' or 'F'
