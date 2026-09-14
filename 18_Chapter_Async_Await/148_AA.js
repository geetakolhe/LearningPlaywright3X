// Async & Await
// Async Fn->Multiple Promise
// Await -> fn (call)

async function getTestResult(){
  return "pass";
}

getTestResult().then(function(results){
   console.log(results);
  
});

async function runTest(){

  let result1 = await Promise.resolve("Login test passed");
  console.log(result1);

  let result2 = await Promise.resolve("Dashboard test passed");
  console.log(result2);
}

runTest();