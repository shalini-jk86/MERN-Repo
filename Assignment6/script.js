function calculateGrade() {
  let marks = [];
  for (let i = 1; i <= 5; i++) {
    let input = prompt(`Enter marks for subject ${i}:`);
    marks.push(Number(input));
  }

  let total = marks.reduce((sum, val) => sum + val, 0);
  let average = total / marks.length;

  let grade;
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  alert(`Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);
}