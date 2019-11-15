import { Calculator } from './../src/Calc.js';

describe('Calc' , () => {

  test('should correctly create age with user inputted age', () => {
      var newAge = new Calculator(38);
      expect(Calculator.age).toEqual(38);

  });
});
