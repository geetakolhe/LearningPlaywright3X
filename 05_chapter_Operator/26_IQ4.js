let responseTime = 850;  //ms
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA True" : "SLA Breached false";
console.log('Response:' , responseTime, slaStatus);

// Template Literal
console.log('What is the SLA time ?',sla);