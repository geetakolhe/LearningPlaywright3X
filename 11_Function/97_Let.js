var a = "Pramod";

if (true){
  console.log(a);
  var a = "temporary";
  // console.log(a);
}

// if we use let instead of var, it will give an error because let is block scoped and cannot be accessed before initialization.