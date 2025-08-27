function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    let _grade;
   
    function validateGrade(grade) {
        if (grade ==='A' || grade ==='F') {
            return true;
        }
        return false;
    };

    if(validateGrade(grade)){
        _grade = grade;
    } else {
    console.log('Invalid grade. Grade must be either "A" or "F".');
    _grade = 'F';//default to F if invalid
    }
   
    this.getGrade = function() {
        return _grade;
    };
     
    this.setGrade= function(grade) {
        if (validateGrade(grade)) {
            _grade = grade;
        } else {
            console.log('Invalid grade. Grade must be either "A" or "F".');
        }

   
  };
this.introduce = function() {
    console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGrade()}.`);

};
}

var student1= new Student('Sema',22, 'A');
student1.introduce(); 
student1.setGrade('F');
student1.introduce();
student1.setGrade('B');
student1.introduce();
var student2= new Student('Sara',28, 'D');
student2.introduce();
console.log(student2.getGrade());