describe ("calculate", function () {

	describe ('Выполняет арифметические операции', function () {
		it ('выполняет операцию "+"', function () {
			assert.equal(calculate("+", 10, 5), 15);

		});

		it ('выполняет операцию "-"', function () {
			assert.equal(calculate("-", 20, 15), 5);

		});

		it ('выполняет операцию "*"', function () {
			assert.equal(calculate("*", 2, 3), 6);

		});

		it ('выполняет операцию "/"', function () {
			assert.equal(calculate("/", 16, 2), 8);

		});
	});



	describe ('Бросает исключения', function () {
		it ('при делении на ноль бросает исключение', function () {
			try {
				calculate("/", 1, 0);
			}
			catch(e) {
				assert.equal("На ноль делить нельзя", e.message);
			}
		});

		it ('операнд 1 не является числом', function () {
			try {
				calculate("+", "string", 5);
			}
			catch(e) {
				assert.equal("Операнд 1 не является числом", e.message);
			}
		});

		it ('операнд 2 не является числом', function () {
			try {
				calculate("*", 10, "test");
			}
			catch(e) {
				assert.equal("Операнд 2 не является числом", e.message);
			}
		});

		it ('неверно указан оператор', function () {
			try {
				calculate(10, 10, 10);
			}
			catch(e) {
				assert.equal("Неверно указан оператор", e.message);
			}
		});
	});
});


describe ("find substring", function () {

	describe ('Выполняет поиск подстроки в массиве', function () {
		it ('поиск подстроки', function () {
			assert.equal(findStr(['яблоко', 'груша', 'апельсин', 'виноград'], 'груша'), true);
		});

		it ('поиск подстроки в другом регистре', function () {
			assert.equal(findStr(['яблоко', 'грУша', 'апельсин', 'виноград'], 'Груша'), true);
		});

		it ('не находит подстроку, которой нет в массиве', function () {
			assert.equal(findStr(['яблоко', 'груша', 'апельсин', 'виноград'], 'кот'), false);
		});
	});
});

