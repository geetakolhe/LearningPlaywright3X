// Real QA  Scenario : E2E Login flow app.vwo.com

function openBrowser(callback){
  console.log("Opening the brwser");
  setTimeout(function (){
    console.log("step 1 - browser starting...");
    callback();
  }, 500);
}

function goToLoginPage(callback){
  setTimeout(function () {
    console.log("Step 2 - Login Page Loaded");
    callback();
  }, 500);
}

function enterCredentials(callback){
  setTimeout(function (){
    console.log("Step 3 - Credentials entered");
    callback();
  }, 500);
}

function clickLogin(callback){
  setTimeout(function (){
    console.log("tep 4 - Login button clicked");
    callback();
  }, 500);
}

// This is calback hell!

openBrowser(function(){
  goToLoginPage(function(){
    enterCredentials(function(){
      clickLogin(function(){
        console.log("Test is completd!");
      })
    })
  })
})