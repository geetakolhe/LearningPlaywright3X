// Mixin concept can help you to perform the multiple inheritance

// Mixin  1: Adds logging ability
let LoggerMixin = function (Base) {
  return class extends Base {
    log(msg){
      console.log("[Log] " + msg);
    }
  }
}

let ScreenshotMixn = function (Base) {
  return class extends Base {
    takeScreenshot() {
      console.log("[Screenshot] captured");
    }
  };
};

// Base Class

class TestCase {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log("Running: "+ this.name);
  }
}

// Apply both mixins

class SmartTest extends ScreenshotMixn(LoggerMixin(TestCase)) {
  constructor(name) {
    super(name);
  }
}

const test = new SmartTest("Login Test");
test.run();
test.log("Test started");
test.takeScreenshot();
