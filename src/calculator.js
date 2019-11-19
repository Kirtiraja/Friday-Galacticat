

export class Calculator {
  constructor(age, expectency){
    this.age = age;
    this.expectency = expectency;
  }

  mercuryAge(){
    if (this.age === 0 || this.expectency === 0){
      return "enter age or expectency greater than zero";
    } else
      return this.age =(Math.floor((this.age) /.24));
      // return this.expectency = (this.expectency)/.24 - this.age;
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
