function Student(name, age, initialGrade){
    this.name = name;
    this.age = age;

    let grade = 'F'; // Default grade

    function isValidGrade(gradeValue) {
        return gradeValue === 'A' || gradeValue === 'F';
    }

    if (initialGrade && isValidGrade(initialGrade)) {
        grade = initialGrade;
    }
    
    this.getGrade = function() {
        return grade;
    };
    
    this.setGrade = function(newGrade) {
        if (isValidGrade(newGrade)) {
            grade = newGrade;
            console.log(`${this.name}'s grade has been updated to ${grade}`);
        } else {
            console.log(`Invalid grade: ${newGrade}. Grade must be 'A' or 'F'.`);
        }
    };
}

Student.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${this.getGrade()}.`);
};

const student1 = new Student('Basma', 21, 'F');
student1.introduce();

const student2 = new Student('Alaa', 22, 'F');
student2.introduce();

console.log('Student1 grade:', student1.getGrade());
student1.setGrade('A');
console.log('Student1 grade:', student1.getGrade());
student1.setGrade('C');