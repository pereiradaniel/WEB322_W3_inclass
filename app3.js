class student_info {
  constructor(lname,lage){
    this.name=lname;
    this.age=lage;
  }
  setName(n) {
    this.name = n;
  }
  getAge() {
    return this.age;
  }
}

var std1 = new student_info("Maria", 77);
var std2 = new student_info("Haytham", 55);
console.log(std1.name);
console.log(std2.name);