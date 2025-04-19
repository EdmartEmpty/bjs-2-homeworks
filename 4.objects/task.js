function Student(name, gender, age) {
  this.name = name;
    this.age = age;
    this.male = male;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((x,y) => x+y)/this.marks.length;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
    delete this.subject ;
    delete this.marks ;
}
