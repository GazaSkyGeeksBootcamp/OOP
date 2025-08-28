// ============================================
// Student System - Constructor Function
// ============================================

/**
 * Student Constructor Function
 * Creates a new Student instance with name, age, and private grade
 * @param {string} name - The student's name
 * @param {number} age - The student's age
 * @param {string} grade - The student's grade (A or F only)
 */
function Student(name, age, grade) {
    // Public properties
    this.name = name;
    this.age = age;
    
    // Private grade property using closure
    let _grade = null;
    
    // Validate and set initial grade
    if (grade === 'A' || grade === 'F') {
        _grade = grade;
    } else {
        throw new Error('Grade must be either "A" or "F"');
    }
    
    // Public method: introduce
    this.introduce = function() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${_grade}.`);
    };
    
    // Public method: getGrade (getter for private grade)
    this.getGrade = function() {
        return _grade;
    };
    
    // Public method: setGrade (setter for private grade with validation)
    this.setGrade = function(newGrade) {
        if (newGrade === 'A' || newGrade === 'F') {
            _grade = newGrade;
            console.log(`Grade updated to: ${_grade}`);
        } else {
            console.error('Invalid grade! Grade must be either "A" or "F"');
            throw new Error('Grade must be either "A" or "F"');
        }
    };
}

// ============================================
// Example Usage and Testing
// ============================================

console.log('=== Student System Testing ===');

// Test 1: Create students with valid grades
console.log('\n--- Test 1: Creating Students ---');
const student1 = new Student('Saadi', 21, 'A');
const student2 = new Student('Sarah', 23, 'A');
const student3 = new Student('Mohammed', 27, 'F');

// Test 2: Test introduce method
console.log('\n--- Test 2: Introduce Method ---');
student1.introduce(); // "Hi, my name is Saadi, I'm 21 years old, and I'm in grade A."
student2.introduce(); // "Hi, my name is Sarah, I'm 23 years old, and I'm in grade A."
student3.introduce(); // "Hi, my name is Mohammed, I'm 27 years old, and I'm in grade F."

// Test 3: Test getGrade method
console.log('\n--- Test 3: Get Grade Method ---');
console.log(`${student1.name}'s grade:`, student1.getGrade()); // A
console.log(`${student2.name}'s grade:`, student2.getGrade()); // A
console.log(`${student3.name}'s grade:`, student3.getGrade()); // F

// Test 4: Test setGrade method with valid grades
console.log('\n--- Test 4: Set Grade Method (Valid) ---');
student2.setGrade('A'); // Grade updated to: A
console.log(`${student2.name}'s new grade:`, student2.getGrade()); // A
student2.introduce(); // Should show grade A now

student1.setGrade('F'); // Grade updated to: F
console.log(`${student1.name}'s new grade:`, student1.getGrade()); // F

// Test 5: Test grade privacy (should be undefined)
console.log('\n--- Test 5: Grade Privacy Test ---');
console.log('Direct access to _grade:', student1._grade); // undefined
console.log('Direct access to grade:', student1.grade); // undefined
console.log('Grade accessible only through getGrade():', student1.getGrade()); // F

// Test 6: Test setGrade validation with invalid grades
console.log('\n--- Test 6: Set Grade Validation (Invalid) ---');
try {
    student1.setGrade('B'); // Should throw error
} catch (error) {
    console.log('Caught error:', error.message);
}

try {
    student1.setGrade('C'); // Should throw error
} catch (error) {
    console.log('Caught error:', error.message);
}

try {
    student1.setGrade(''); // Should throw error
} catch (error) {
    console.log('Caught error:', error.message);
}

// Test 7: Test constructor validation with invalid initial grade
console.log('\n--- Test 7: Constructor Validation ---');
try {
    const invalidStudent = new Student('Invalid', 20, 'B'); // Should throw error
} catch (error) {
    console.log('Constructor validation error:', error.message);
}

try {
    const invalidStudent2 = new Student('Invalid2', 22, 'X'); // Should throw error
} catch (error) {
    console.log('Constructor validation error:', error.message);
}

// ============================================
// Advanced Testing: Multiple Students
// ============================================

console.log('\n=== Advanced Testing: Multiple Students ===');

// Create array of students
const students = [
    new Student('Omar', 18, 'A'),
    new Student('Fatma', 20, 'F'),
    new Student('Khaled', 19, 'A'),
    new Student('Nour', 21, 'F')
];

// Test all students
console.log('\n--- All Students Introduction ---');
students.forEach((student, index) => {
    console.log(`Student ${index + 1}:`);
    student.introduce();
});

// Test grade statistics
console.log('\n--- Grade Statistics ---');
const gradeA = students.filter(student => student.getGrade() === 'A').length;
const gradeF = students.filter(student => student.getGrade() === 'F').length;

console.log(`Students with grade A: ${gradeA}`);
console.log(`Students with grade F: ${gradeF}`);
console.log(`Total students: ${students.length}`);

// Test bulk grade updates
console.log('\n--- Bulk Grade Updates ---');
students.forEach(student => {
    if (student.getGrade() === 'F') {
        console.log(`Promoting ${student.name} from F to A`);
        student.setGrade('A');
    }
});

// Show final grades
console.log('\n--- Final Grades ---');
students.forEach(student => {
    console.log(`${student.name}: ${student.getGrade()}`);
});

// ============================================
// Utility Functions for Student Management
// ============================================

/**
 * Creates a student with error handling
 * @param {string} name - Student name
 * @param {number} age - Student age  
 * @param {string} grade - Student grade (A or F)
 * @returns {Student|null} Student instance or null if creation failed
 */
function createStudent(name, age, grade) {
    try {
        const student = new Student(name, age, grade);
        console.log(`✅ Successfully created student: ${name}`);
        return student;
    } catch (error) {
        console.error(`❌ Failed to create student ${name}:`, error.message);
        return null;
    }
}

/**
 * Updates a student's grade safely
 * @param {Student} student - Student instance
 * @param {string} newGrade - New grade (A or F)
 * @returns {boolean} Success status
 */
function updateStudentGrade(student, newGrade) {
    try {
        const oldGrade = student.getGrade();
        student.setGrade(newGrade);
        console.log(`✅ Updated ${student.name}'s grade from ${oldGrade} to ${newGrade}`);
        return true;
    } catch (error) {
        console.error(`❌ Failed to update ${student.name}'s grade:`, error.message);
        return false;
    }
}

// Test utility functions
console.log('\n=== Utility Functions Testing ===');
const testStudent = createStudent('Test Student', 20, 'A');
if (testStudent) {
    testStudent.introduce();
    updateStudentGrade(testStudent, 'F');
    updateStudentGrade(testStudent, 'B'); // fail test
}

console.log('\n=== Student System Completed ===');