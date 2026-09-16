class ICICI {
  #balance;
  constructor(name, balance){
    this.#balance = balance;
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  getBalance(){
    return this.#balance;
  }

  setBalance(balance, isCashier){
    if (isCashier){
      this.#balance = balance;
    }else {
      console.log("Not allowed");
    }
  }
}

let pramod = new ICICI("pramod", 1000);
console.log(pramod.getBalance());
pramod.setBalance(100000000, false);
console.log(pramod.getBalance());

let pramod_father = new ICICI("pramod", 2000);
console.log(pramod.getBalance());
pramod.setBalance(300000000, true);
console.log(pramod.getBalance());