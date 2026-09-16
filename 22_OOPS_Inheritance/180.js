class TestCase {
  execute(){
    console.log("Running generic test");
  }
}

class UnitTest extends TestCase{
  execute(){
    console.log("Running Unit Test Case");
  }
}

class APITest extends TestCase{
  execute(){
    console.log("Running API Test Case");
  }
}

class E2ETest extends TestCase{
  execute(){
    console.log("Running E2ETest Test Case");
  }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];

tests.forEach(function(test){
  test.execute();
}) 