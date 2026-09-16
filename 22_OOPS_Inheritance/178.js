class BaseTest {
  setup(){
    console.log("Base: Open browser");
  }
}
class APITest extends BaseTest {
  setup(){
    console.log("APITest: open browser");
  }
}

let test = new APITest();
test.setup();
