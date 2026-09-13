let order = new Promise(function (resolve, reject) {

  let foodready = true;
  if (foodready) {
    resolve("Pizza is delivered!");
  }
  else {
    reject("Orded cancelled");
  }
});

console.log(order);