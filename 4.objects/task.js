function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
};

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks) {
		this.marks.push(...marksToAdd);
	} else {
		console.log('Студент отчислен!');
	}
};

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	let sum = this.marks.reduce((total, mark) => total + mark, 0);
	return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
};

let student1 = new Student('Ольга', 'женский', 22);
let student2 = new Student('Иван', 'мужской', 21);