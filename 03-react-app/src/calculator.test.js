import calculator from './calculator';

describe('A Calculator', () => {
	it('Should add two numbers', () => {
		//Arrange
		let x = 100,
			y = 200,
			expectedResult = 300;

		//Act
		let actualResult = calculator.add(x,y);

		//Assert
		expect(actualResult).toBe(expectedResult);
	});

	it('Should subtract two numbers', () => {
		//Arrange
		let x = 100,
			y = 200,
			expectedResult = -100;

		//Act
		let actualResult = calculator.subtract(x,y);

		//Assert
		expect(actualResult).toBe(expectedResult);
	});
});