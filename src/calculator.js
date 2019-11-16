

export class Calculator {
  constructor(age){
    this.age = age;
  }

  planetAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    }
      return this.age =(Math.floor((this.age) /.24));

  }
}
