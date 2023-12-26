class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state = this._state * 1.5;
    if (this._state > 100) {
      this._state = 100;
    }
  }

  set state(value) {
    if (value > 0 && value < 100) {
      this._state = value;
    }
    if (value < 0) {
      this._state = 0;
    }
    if (value > 100) {
      this._state = 100;
    }
  }


  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book { 
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "novel";
  }
}

class FantasticBook extends Book { 
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book { 
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "detective";
  }
}

// Второе задание
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
    const book1 = this.books.find((item) => {
      return item(type) === value;
    });
    
    if (book1 === undefined) {
      return null;
    }
    return book1;
  }

  giveBookByName(bookName) {
    const bookIndex = Library.books.findIndex((item) => {
      Library.books.splice(item, 1);
      return item.bookName === bookName;
    });
    if (bookIndex < 0 ) {
      return null;
    }
  }
}
