// Create an object.
var student_info = {
  name: "Haytham",
  age: 32,
  setStudentName: function(n) { this.name = n;},
  getAge: function() { return this.age; }
};

// Two ways of accessing name:
console.log(student_info["name"]);
console.log(student_info.name);

// Change name to Maria:
student_info.setStudentName("Maria");
console.log(student_info.name);

// Create a new object, copying data from student_info:
var std1 = Object.create(student_info);
// Change name to May:
std1.setStudentName("May");
// Display age and name:
console.log(std1.age);
console.log(std1.name);

// Change age to 44:
std1.age=44;
// Use this.getAge() to display name:
console.log(std1.getAge());

// Copy into a new object from student_info:
var std2 = Object.create(student_info);
console.log(std2.age);