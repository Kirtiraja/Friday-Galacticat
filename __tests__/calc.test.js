import { Calculator } from './../src/calculator.js';

describe('Calculator' , () => {

  test('should correctly create age with user inputted age', () => {
    let calculator = new Calculator(38);
    expect(calculator.age).toEqual(38);
    });

  test('should correctly identify 0 ', () => {
    let underAge = new Calculator(0);
    expect(underAge.mercuryAge()).toEqual("enter age greater than zero");
    });

  test('should correctly return age in mercury years', () => {
    let mercuryAge = new Calculator(38);
    expect(mercuryAge.mercuryAge()).toEqual(158);
    });

  test('should correctly return age in venus years', () => {
    let venusAge = new Calculator(38);
    expect(venusAge.venusAge()).toEqual(61);
    });

  test('should correctly return age in mars years', () => {
    let marsAge = new Calculator(38);
    expect(marsAge.marsAge()).toEqual(20);
    });

  test('should correctly return age in jupiter years', () => {
    let jupiterAge = new Calculator(38);
    expect(jupiterAge.jupiterAge()).toEqual(3);

  });
});
