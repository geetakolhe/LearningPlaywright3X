 let a = {status: "pass"};
// console.log(a.status);
// console.log(a["status"]);

// let a1 = {status: 'pass'};
// console.log(a1.status);

// key are case sensitive
// let a22 = {status: "pass", Status: "fail"};
// console.log(a22["status"]);
// console.log(a22["Status"]);

let b = a; // b copies the Reference, not the object
b.status = "fail";
console.log(a.status);
console.log(b.status);
