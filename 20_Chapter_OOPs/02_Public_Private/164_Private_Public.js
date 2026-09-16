// Private Fields (#) - Hidden Data
// Public Fields

class Credentials {
  #apiKey;
  user;

  constructor(user, key) {
    this.user = user; // public field
    this.#apiKey = key; // private field
  }

  getAuthHeader() {
    return "Bearer " + this.#apiKey;
  }
}

let cred = new Credentials("admin", "secret_Key_1234");
console.log(cred.user);
console.log(cred.getAuthHeader());
// console.log(cred.#apiKey); // This is not allowed outside the class
