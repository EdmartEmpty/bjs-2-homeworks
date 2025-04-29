class PrintEditionItem {
    constructor(name,releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        if(this.state < 100 && this.state > 0){
            this.state = this.state * 1.5;   
        }
    }
 
    set state(newState) {
        if(newState > 100){
            this._state = 100;
        }
        else if(newState < 0){
            this._state = 0;
        } else {
        this._state = newState;
        }
    }
    get state(){
        return this._state;
    } 
}

class Magazine extends  PrintEditionItem{
    constructor(name,releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends  PrintEditionItem{
    constructor(author,name,releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name,releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.type = "novel";
}
}
class FantasticBook extends Book {
    constructor(name,releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.type = "fantastic";
}
}
class DetectiveBook extends Book {
    constructor(name,releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.type = "detective";
}
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
        this.books.push(book);
    }
}
    findBookBy(type, value){
        for(let book of this.books){
            if(type in book && book[type] === value){
                return book;
            }
        }
        return null;
}

giveBookByName(bookName){
    for(let i = 0; i< this.books.length; i++){
        if(this.books[i].name === bookName){
            let returnBook = this.books[i];
            delete this.books[i];
            this.books = this.books.filter(x => x);
            return returnBook;
        }
    }
    return null;
}
}

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }

    addMark(mark,theme){
        if(mark < 2 || mark > 5){
            return;
        }
        if(theme in this.marks){
         this.marks[theme].push(mark);
            return;
        }
         this.marks[theme] = [];
         this.marks[theme].push(mark);
     }
     getAverageBySubject(theme){
        if(theme in this.marks === false){
            return 0;
        }
         return this.marks[theme].reduce((x,y) => x+y) / this.marks[theme].length;

     }
     getAverage(){
        let arrKeys = Object.keys(this.marks);
        if(arrKeys.length === 0){
            return 0;
        }
        let summMarks = 0;
        for (let i = 0; i < arrKeys.length; i++){
        summMarks +=  this.marks[arrKeys[i]].reduce((x,y) => x+y) / this.marks[arrKeys[i]].length;
    }
    return summMarks / arrKeys.length;
     }
  }
  
  
  
  