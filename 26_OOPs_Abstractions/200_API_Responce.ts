// Interface are used in API Testing

interface APIResponse {
  statuscode: number;
  body: string;
  headers: object;
  responseTime: number;
}

let responseData: APIResponse = {
  statuscode: 200,
  body: "{}",
  headers: {},
  responseTime: 200,
}

console.log("Status:", responseData.statuscode);
console.log("Body:", responseData.body);
console.log("Headers:", responseData.headers);