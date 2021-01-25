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

console.log(std1.name);