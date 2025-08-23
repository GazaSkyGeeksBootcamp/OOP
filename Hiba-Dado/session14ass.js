function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    let grade;
    
    this.setGrade = function(Grade) {
        if (Grade === 'A' || Grade === 'F') {
            grade = Grade;
        } else {
            console.log("error: grade must be either A or F");
        }
    }
    
    this.getGrade = function() {
        return grade;
    }
    
    this.setGrade(grade);
    
    this.introduce = function() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${this.getGrade()}.`);
    }
}

// Ex:
const student = new Student("Ali", 20, "A");
student.introduce();

const student2 = new Student("Hiba", 20, "H");


