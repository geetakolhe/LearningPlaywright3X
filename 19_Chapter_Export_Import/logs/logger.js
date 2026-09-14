// Define Export -> Export one Main Thing

// Logger -> Logger is a file which will help you to write logs to capture events documnet and it can give you warning

export default function log(message) {
  console.log("[LOG] "+message);
}

export function logBetter(message) {
  console.log("-----------------");
  console.log("[LOGS] "+message);
  console.log("------------------");
}