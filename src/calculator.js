

export class Calculator {
  constructor(age){
    this.age = age;
  }

  planetAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    }
    return this.age =(parseFloat((this.age) /.24).toFixed());

  }
}
