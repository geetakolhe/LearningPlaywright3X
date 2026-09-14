// Error handling -try/catch
// with Promise you use .catch()
// with async/await you use try/catch - exactly like regular JavaScript 

async function testAPI(){
  try {
    let result = await Promise.reject(" 503 Service unavailble");
    console.log('result', result);
  } catch(error){
    console.log('Error', error);
  } finally {
    console.log("Clean up!");
  }
  
}

testAPI();

function step1(){
  console.log("1");
}

function step2(){
  console.log("2");
}

function step3(){
  console.log("3");
}

step1();
step2();
step3();