

export class Calculator {
  constructor(age){
  this.age = age;
  }

  planetAge(){
    if(this.age === NaN){
      return "enter age as a number"
    }
  }
};
