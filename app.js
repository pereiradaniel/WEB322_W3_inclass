// Create an object.
var student_info = {
  name: "Haytham",
  age: 32,
  setStudentName: function(n) { this.name = n;},
  getAge: function() { return this.age; }
};

// console.log(student_info["name"]);

console.log(student_info.name);

student_info.setStudentName("Maria");
console.log(student_info.name);

var std1 = Object.create(student_info);
std1.setStudentName("May");
console.log(std1.age);
console.log(std1.name);

std1.age=44;
console.log(std1.age);
console.log(std1.getAge());