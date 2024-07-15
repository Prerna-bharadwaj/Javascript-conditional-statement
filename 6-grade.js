function computeAverageAndGrade() {
   
    let students = [
        { name: "David", marks: 80 },
        { name: "Vinoth", marks: 77 },
        { name: "Divya", marks: 88 },
        { name: "Ishitha", marks: 95 },
        { name: "Thomas", marks: 68 }
    ];

   
    let totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }
    let averageMarks = totalMarks / students.length;

    // Determine the grade based on average marks
    let grade;
    if (averageMarks >= 90) {
        grade = 'A';
    } else if (averageMarks >= 80) {
        grade = 'B';
    } else if (averageMarks >= 70) {
        grade = 'C';
    } else if (averageMarks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

 
    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}


computeAverageAndGrade();
