function getStatus(code){
  if (code === 200 && code < 300) return "Success";
  if (code === 400 && code < 500) return "Client Error";
  if (code === 500 && code < 600) return "Server Error";
   
}

getStatus(200); // Output: "Success"
getStatus(404); // Output: "Client Error"
getStatus(500); // Output: "Server Error" 

// Return nothing undefined
function logTest(name){
  console.log(`Running : ${name}`);
  // No return statement, so it returns undefined
}

logTest ("Hi this ia a log");
