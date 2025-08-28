function student(name,age,grade){
    this.name=name;
    this.age=age;
    
    let Grade=grade;
    this.getGrade=function(){
        return Grade;
    };
    this.setGrade=function(newGrade){
        if(newGrade==='A'||newGrade==='F')
            Grade=newGrade;
        else
            console.log('invalid grade');
    };
    this.introduce=function(){
        console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${Grade}.`);
    };
}

let studentObj=new student('Ali',20,'A');
studentObj.introduce();