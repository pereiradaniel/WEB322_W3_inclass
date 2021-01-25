function student_info(iname, iage) {
  this.name = iname;
  this.age = iage;
  this.address="55 Green";
  this.setAge=function(){return this.age;};
}

var std1 = new student_info("Haytham", 66);

console.log(std1.name+std1.age+std1.address);

console.log(std1.setAge());