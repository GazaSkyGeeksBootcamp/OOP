// Task Two
function Student(name, age){
    this.name = name;
    this.age = age;
    let grade;
    // Methods
    this.setGrade =  (grade) => {
        if(grade === 'A' || grade === 'F'){
            this.grade = grade;
        }
        else{
            return 'value not accepted'
        }
    }
    this.getGrade =  (grade) => {
        return this.grade;
    }
} 
Student.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGrade()}.`);
}

const StudentInstance = new Student('ahmed',21);
console.log(StudentInstance);
console.log(StudentInstance.setGrade(52));
console.log(StudentInstance.getGrade());
StudentInstance.introduce();



