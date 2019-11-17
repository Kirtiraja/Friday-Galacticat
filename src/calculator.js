

export class Calculator {
  constructor(age){
    this.age = age;
  }

  mercuryAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    } else
      return this.age =(Math.floor((this.age) /.24));
  }

  venusAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    } else
      return this.age =(Math.floor((this.age) /.62));
  }


  marsAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    } else
      return this.age =(Math.floor((this.age) /1.88));
  }

  jupiterAge(){
    if (this.age === 0){
      return "enter age greater than zero";
    } else
      return this.age =(Math.floor((this.age) /11.86));
  }
}
