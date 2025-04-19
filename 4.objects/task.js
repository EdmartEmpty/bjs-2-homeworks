function Student(name, gender, age) {
  this.name = name;
    this.age = age;
    this.gender = gender;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty("marks")){
  this.marks = marks;
    }
}

Student.prototype.getAverage = function () {
    if(this.marks.length === 0) 
    {
        return 0;
    }
  return this.marks.reduce((x,y) => x+y)/this.marks.length;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
    delete this.subject ;
    delete this.marks ;
}
