class TestCase{
  constructor(name, status, priority){
    this.name = name;
    this.status = status;
    this.priority = priority;

  }

  display(){
    console.log(this.name+" ->"+ this.status+" ->"+ this.priority);
  }
}

let loginTest_ref = new TestCase("Login Test","Pass","P0");
let signupTest_ref = new TestCase("Signup Test","Fail","P1");

loginTest_ref.display();