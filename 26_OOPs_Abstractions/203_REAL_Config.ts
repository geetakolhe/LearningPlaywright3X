interface TestConfig {
  browser: string;
  headless: boolean;
  baseURL: string;
  timeout?: number;
  retries?: number;
}

let localConfig: TestConfig = {
  browser: "chrome",
  headless: true,
  baseURL: "https://staging.app.com"
};

let ciConfig: TestConfig = {
  browser: "Edge",
  headless: false,
  baseURL: "http://localhost:3000",
  timeout: 10000,
  retries: 3
};

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);