class Car{
  constructor(assigned_name){
    this.name = assigned_name;
  }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let hyndai_creta = new Car("creta");
console.log(hyndai_creta.name);

const a = new Car("i10");  // constructor runs -> "i10"
const b = new Car("Nexon");