import { Calculator } from './../src/calculator.js';

describe('Calculator' , () => {

  test('should correctly create age with user inputted age', () => {
      let calculator = new Calculator(38);
      expect(calculator.age).toEqual(38);
    });

  test('should correctly determine age of user on mercury', () => {
    let mercuryAge = new Calculator(.241);
    expect(mercuryAge.planetAge()).toEqual(1);
    });
});
