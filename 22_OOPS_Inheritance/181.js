class BasePage {
  verify() {
    console.log("Verifying base page");
  }
}

class LoginPage extends BasePage {
  verify() {
    console.log("Verify: Username");
    console.log("Verify: Password");
    console.log("Verify: Login");
  }
}

class DashboardPage extends BasePage {
  verify() {
    console.log("Verify: Welcome message shown");
    console.log("Verify: Sidebar menu loaded");
  }
}

class CartPage extends BasePage {
  verify() {
    console.log("Verify: Cart items displayed");
    console.log("Verify: Total price is correct");
  }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function (page) {
  page.verify();
  console.log("---------------------");
});