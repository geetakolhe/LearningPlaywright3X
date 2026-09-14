// Flaky Test -> 100TC, 3 Failed
// I want to rerun them 3, these are flaky,
// It sometimes pass, failed...
// 3 I want to re Run
// 3 Failer, First F1, F2 2 TestCase Passed, 1 Failed ->
// 3, 2-P, 1 Failed, -> Falky ->. 2


// Retry Pattern with Async/Await - Real QA

let attempt = 0;

function flakyAPI(){
  attempt++;
  if(attempt <= 3){
    return Promise.reject("Attempt "+ attempt +": failed");
  }
  return Promise.resolve("Attempt "+ attempt +": Sucess!");
}

async function retryTesting(maxRetries){
  for (let i=1; i<=maxRetries; i++){
    try{
      let result = await flakyAPI();
      console.log("Pass promise!, I will exit also", result);
    } catch(error){
      console.log('Fail Promise!', error);
    }
  }
}

retryTesting(4
  
);