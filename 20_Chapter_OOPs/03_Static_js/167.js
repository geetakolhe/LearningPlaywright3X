class Student {
  static collegeName = "PW AT Batch";

  constructor(name){
    this.name = name;
  }
  static display(){
    console.log(this.name+"are part of the", Student.collegeName)
  }
}

let amit = new Student("amit");
let namdev = new Student("namdev");
let pratik = new Student("pratik");
let pramod = new Student("pramod");

console.log(Student.collegeName);
console.log(amit.name);
console.log(pramod.name);
console.log(namdev.name);
console.log(pratik.name);
