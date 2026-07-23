let browser = "Brave";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "OPera":
      console.log("Chromium Project");
      break;
    case "Firefox":
      console.log("Mozila Project!");
      break;
    case "Safari":
      console.log("Apple browser - uses JavascriptCore engine");
      break;  
    default:
      console.log("Unkown browser - Manual testing needed");  
}