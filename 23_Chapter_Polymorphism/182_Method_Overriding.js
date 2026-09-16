class BaseTest {
  setup() {
    console.log("Base: open browser");
  }
}

class APITesting extends BaseTest {
  setup() {
    console.log("APITest: open browser");
  }
}

let test = new APITesting();
test.setup();