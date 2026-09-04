function doubleMe(a){
  return a*2;
}

const double = (a) => a * 2;
double(5); // 10

const getEnv = () => "staging";
console.log(getEnv()); // staging

// Multiline 
const getResult = (score) => {
  return score > 70 ? "pass" : "fail";
}