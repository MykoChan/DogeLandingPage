/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
// eslint-disable-next-line no-restricted-syntax

// const myLibrary = [];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.info = function () {
//     if (this.read) {
//         // eslint-disable-next-line no-console
//         console.log(
//             `${this.title} by ${this.author}, ${this.pages} pages, read.`
//         );
//     } else {
//         // eslint-disable-next-line no-console
//         console.log(
//             `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
//         );
//     }
// };

// function addBookToLibrary(title, author, pages, read) {
//     const newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
// }

// function addBookToLibrary(title, author, pages, read) {
//     const newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
// }

// addBookToLibrary("test title 1", "test author 1", "311", true);
// addBookToLibrary("test title 2", "test author 2", "313", true);
// addBookToLibrary("test title 2", "test author 2", "313", false);
// addBookToLibrary("test title 2", "test author 2", "314", false);

class Book {
    constructor(
        title = "unknown",
        author = "unknown",
        pages = "0",
        read = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    getBookByTitle(title) {
        const foundBook = this.books.find((book) => book.title === title);
        return foundBook;
    }
}

const myLibrary = new Library();

myLibrary.addBook(new Book("test title 1", "test author 1", "311", true));
myLibrary.addBook(new Book("test title 2", "test author 2", "313", true));
myLibrary.addBook(new Book("test title 3", "test author 3", "313", false));
myLibrary.addBook(new Book("test title 4", "test author 4", "314", false));

const libraryContainer = document.querySelector(".books-container");
// for (const book of myLibrary.books) {
//     const bookDiv = document.createElement("div");
//     bookDiv.classList.add("book-card");

//     const titleP = document.createElement("p");
//     titleP.innerText = book.title;
//     titleP.classList.add("title");

//     const authorP = document.createElement("p");
//     authorP.innerText = book.author;
//     authorP.classList.add("author");

//     const pagesP = document.createElement("p");
//     pagesP.innerText = book.pages;
//     pagesP.classList.add("pages");

//     const readButton = document.createElement("button");
//     readButton.innerText = book.read ? "Read" : "Not read";
//     readButton.classList.add("btn");
//     readButton.classList.add("read-status");

//     bookDiv.appendChild(titleP);
//     bookDiv.appendChild(authorP);
//     bookDiv.appendChild(pagesP);
//     bookDiv.appendChild(readButton);

//     libraryContainer.appendChild(bookDiv);
// }

const createBookCard = (book) => {
    const bookCard = document.createElement("div");
    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");
    const readButton = document.createElement("button");

    bookCard.classList.add("book-card");
    readButton.classList.add("btn");
    readButton.classList.add("read-status");
    titleP.classList.add("title");
    authorP.classList.add("author");
    pagesP.classList.add("pages");

    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = `${book.pages} pages`;

    if (book.read) {
        readButton.textContent = "Read";
        readButton.classList.add("btn-light-green");
    } else {
        readButton.textContent = "Not read";
        readButton.classList.add("btn-light-red");
    }

    bookCard.appendChild(titleP);
    bookCard.appendChild(authorP);
    bookCard.appendChild(pagesP);
    bookCard.appendChild(readButton);

    libraryContainer.appendChild(bookCard);
};

for (const book of myLibrary.books) {
    createBookCard(book);
    console.log(`Creating book: ${book.read}`);
}

function toggleRead(e) {
    const readButton = e.target;
    const title = readButton.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ""
    );
    const book = myLibrary.getBookByTitle(title);

    console.log(`Book read before: ${book.read}`);
    book.read = !book.read;
    console.log(`Book read after: ${book.read}`);
    if (book.read) {
        readButton.textContent = "Read";
        readButton.classList.remove("btn-light-red");
        readButton.classList.add("btn-light-green");
    } else {
        readButton.textContent = "Not read";
        readButton.classList.remove("btn-light-green");
        readButton.classList.add("btn-light-red");
    }
}

const readButtons = document.querySelectorAll(".read-status");
readButtons.forEach((readButton) =>
    readButton.addEventListener("click", toggleRead)
);
