function Students(name,age,grade){
    this.name=name;
    this.age=age;
    let stdGrade=grade;

    function setGrade (value) {
        if (value === "A" || value === "F") {
            stdGrade = value;
        } else {
            stdGrade = "Not graded yet";
            console.log("Invalid grade! Must be A or F.");
           
        }
    }
      this.getGrade = function() {
        setGrade(stdGrade);
        return stdGrade;
    }
    
}
