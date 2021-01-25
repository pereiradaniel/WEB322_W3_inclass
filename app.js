// Create an object.
var student_info = {
  name: "Haytham",
  age: 32,
  setName: function(n) { this.name = n;}
};

console.log(student_info.name);
console.log(student_info["name"]);

student_info.setStudentName("Maria");

console.log(student_info.name);