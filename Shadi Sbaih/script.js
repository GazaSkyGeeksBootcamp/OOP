function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    let studentGrade;


    this.getGrade = function () {
        return studentGrade;
    };

    this.setGrade = function (newGrade) {
        if (newGrade === 'A' || newGrade === 'F') {
            studentGrade = newGrade;
            return;
        }
        else {
            throw new Error("Invalid Grade")
        }

    };

    this.setGrade(grade)

    this.introduce = function () {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${studentGrade}.`);
    };

}
const student1 = new Student("Ali", 20, "A");
student1.introduce()

const student2 = new Student("Sara", 24, "F");
student2.introduce()

const student3 = new Student("John", 21, "C");//here will cause an error 

