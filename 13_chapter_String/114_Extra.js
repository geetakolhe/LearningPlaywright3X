let url ="http://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

// Spliting & Joining
"pass,fail,skip".split(","); // ["pass", "fail","skip"]
"hello".split(""); // ["h","e","l","l","o"]

// Template literal (Joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("_");
console.log(date);