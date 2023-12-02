function parseCount(input) {
	const parsed = Number.parseFloat(input)
	if (Number.isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}
	return parsed;
}

function validateCount(input) {
	try {
		return parseCount(input);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (!this.isTriangleValid()) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	isTriangleValid() {
		return this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a;
	}


	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let halfMeter = ((1 / 2) * (this.a + this.b + this.c))
		this._area = Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c))
		return parseFloat(this._area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;

	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}