function CalculatorException(message) {
	this.message = message;
	this.name = "Calculator exception";
}

function calculate(operator, num1, num2) {
	if (isNaN(num1)) {
		throw new CalculatorException("Операнд 1 не является числом");
	}
	if (isNaN(num2)) {
		throw new CalculatorException("Операнд 2 не является числом");
	}
	switch (operator){
		case "+":
			return num1 + num2;
			break;
		case "-":
			return num1 - num2;
			break;
		case "*":
			return num1 * num2;
			break;
		case "/":
			if(num2 == 0) {
				throw new CalculatorException("На ноль делить нельзя");
			}
			return num1 / num2;
			break;
		default:
		throw new CalculatorException("Неверно указан оператор");
	}
}

