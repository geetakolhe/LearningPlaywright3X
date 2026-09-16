class BasePage {
  constructor(pageName){
    this.pageName = pageName;
  }
  open(){
    console.log("opening the page");
  }
  close(){
    console.log("closing the page ");
  }
}

class LoginPage extends BasePage {
  
}

let page = new LoginPage();
page.open();
page.close();