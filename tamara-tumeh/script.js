function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    let Grade = grade; 

    this.getGrade = function () {
        return Grade;
    };

    this.setGrade = function (value) {
        if (value === "A" || value === "F") {
            Grade = value;
        } else {
            console.log("Invalid grade Only 'A' or 'F' are allowed.");
        }
    };
     this.introduce = function () {
        console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${Grade}`);
    };
}

const student1 = new Student("tamara", 21, "A");
student1.introduce()
student1.setGrade("F"); 
console.log(student1.getGrade())
student1.setGrade('B')
