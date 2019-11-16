import { Calculator } from './../src/calculator.js';

describe('Calculator' , () => {

  test('should correctly create age with user inputted age', () => {
      let calculator = new Calculator(38);
      expect(calculator.age).toEqual(38);
    });

  test('should correctly identify 0 ', () => {
    let underAge = new Calculator(0);
    expect(underAge.planetAge()).toEqual("enter age greater than zero");
    });
});
