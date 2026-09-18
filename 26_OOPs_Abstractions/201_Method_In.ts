interface Calulator{
  add(a:number, b: number): number;
  subtract(a:number, b: number): number;
}

const calc: Calulator = {
  add: (a,b) => a+b,
  subtract: (a,b) => a-b, 
}

interface India{
  standUpNationalAnthem(a:string):string;
}

const vash:India = {
  standUpNationalAnthem: (a) => ""
}