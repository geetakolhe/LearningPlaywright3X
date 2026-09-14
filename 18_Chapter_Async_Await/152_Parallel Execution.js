function apiCall(name){
  return new Promise(function (resolve){
    setTimeout(function (){
      resolve(name + ": 200 OK");
    }, 1000);
  });
}

async function NormalTest(){
  console.log("Starting of the Test");
  let start = Date.now();

  let [r1, r2, r3] = await Promise.all([
    apiCall("Auth Service"),
    apiCall("User Service"),
    apiCall("Payment Service"),
  ])
}