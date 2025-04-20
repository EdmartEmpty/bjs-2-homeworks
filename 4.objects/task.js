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
  this.marks.push(...marks);
    }
    
}

Student.prototype.getAverage = function () {
    // if(this.hasOwnProperty("marks") && this.marks.length > 0){
    //   let result = this.marks.reduce((x,y) => x+y)/this.marks.length;
    //   return result;
    // }
    if(this.hasOwnProperty("marks") && this.marks.length > 0){
      let result = this.marks.reduce((acc,item,index,arr) => {acc+=item; if(index === arr.length-1){return acc/arr.length;}return acc;},0);
      return result;
    }
    return 0;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
    delete this.subject ;
    delete this.marks ;
}
