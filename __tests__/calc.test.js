import { Calc } from './../src/Calc.js';

describe('Calc' , () => {

  test('should correctly create age with user inputted age', () => {
      let age = new Calc(38);
      expect(calc.age).toEqual(38);

  });
});
