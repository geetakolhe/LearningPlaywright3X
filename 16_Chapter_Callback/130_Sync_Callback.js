let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function(result, index){
  console.log("Test "+ index + "->" + result);
});

// "All done" prints LAST because for Each is synchronous - it finishes all 4 iterations first, then it will move on 