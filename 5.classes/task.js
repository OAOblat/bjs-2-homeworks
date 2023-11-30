class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = type;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(number) {
        this._state = Math.min(100, Math.max(0, number));
      }
      
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		return index !== -1 ? this.books.splice(index, 1)[0] : null;
	}
}

const library = new Library("Школьная библиотека");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);

library.addBook(
	new Magazine(
		"Мурзилка",
		1924,
		60
	)
);

library.addBook(
	new FantasticBook(
		"Эдгар Райс Берроуз",
		"Владыка Марса",
		1919,
		319
	)
)
// поиск книги:
console.log(library.findBookBy("releaseDate", 1919)); 
// выдаем книгу:
let book = library.giveBookByName("Владыка Марса");
// проверяем, что книга в библиотеке не найдена:
console.log(library.findBookBy("releaseDate", 1919)); // null
// повреждаем книгу и фиксим книгу:
book.state = 80;
console.log(book.state); // 80
book.fix()
console.log(book.state); //100
// возвращаем книгу в библиотеку и проверяем ее наличие
library.addBook(book)
console.log(library.findBookBy("releaseDate", 1919));


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(marksToAdd, subject) {
		if (marksToAdd >= 2 && marksToAdd <= 5 && !isNaN(marksToAdd)) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(marksToAdd);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			return 0;
		}
		let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		const sum = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
		return sum / subjects.length;
	}
}