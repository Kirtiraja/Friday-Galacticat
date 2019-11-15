import { Calculator } from './../src/calculator.js';

describe('Calculator' , () => {

  test('should correctly create age with user inputted age', () => {
      let calculator = new Calculator(3);
      expect(calculator.age).toEqual(3);
    });

  test('should correctly determine age of user on mercury  ')

  });
});
