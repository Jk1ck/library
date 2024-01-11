const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
});

overlay.addEventListener('click', () => {
    c
    modals.forEach(modal => {
        closeModal(modal);
    })
});

function openModal(modal){
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
};

function closeModal(modal){
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
};



const container = document.getElementById('books-container');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const yearPublishedInput = document.getElementById('yearPublished');
const genreInput = document.getElementById('genre');


const bookArray = [];
let bookCounter = 0;

function Book(name,author,yearPublished,genre) {
    this.name= name;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genre = genre;
};

function addBookToLibrary(book, bookCounter) {
    const bookBox = document.createElement('div');
    bookBox.classList.add('bookBox');
    bookBox.setAttribute('data-book-id', bookCounter);

    const btnBox = document.createElement('div');
    btnBox.classList.add('btnBox');

    const readBtn = document.createElement('button');
    readBtn.textContent = 'Mark as read';
    readBtn.classList.add('mark-read-btn');
    btnBox.appendChild(readBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    btnBox.appendChild(deleteBtn);

    bookBox.appendChild(btnBox);
    
    const name = document.createElement('p');
    name.textContent = book.name;
    bookBox.appendChild(name);
    
    const author = document.createElement('p');
    author.textContent = book.author;
    bookBox.appendChild(author);

    const yearPublished = document.createElement('p');
    yearPublished.textContent = book.yearPublished;
    bookBox.appendChild(yearPublished);

    const genre = document.createElement('p');
    genre.textContent = book.genre;
    bookBox.appendChild(genre);

    container.appendChild(bookBox);
};

function removeBooks(){
    while (container.firstChild){ container.removeChild(container.firstChild)};
}

const book1 = new Book('War and Peace', 'Leo Tolstoy', 1867, 'novel');

addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);

const addBtn = document.getElementById('form-button');

addBtn.addEventListener('click', () => {
    if (nameInput.value === '' || authorInput.value === '' ||
    yearPublishedInput.value === '' || genreInput.value === '') 
        alert('You must fill out every field');
        {
            bookArray[bookCounter] = new Book(nameInput.value, authorInput.value, yearPublishedInput.value, genreInput.value);
            removeBooks();
            bookArray.forEach(book => addBookToLibrary(book, bookCounter));
            const modals = document.querySelectorAll('.modal.active');
            closeModal(modal);
            bookCounter++;
        }
});

const readBtns = document.querySelectorAll('.mark-read-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');

readBtns.forEach(button => {
    button.addEventListener('click', () => {
        const box = button.parentNode.parentNode;
        //const id = box.getAttribute('data-book-id');
        if (box.classList.contains('isread')){
            box.classList.remove('isread');
            button.textContent = 'Mark as Read'
        // } else{
        //     box.classList.add('isread');
        //     button.textContent = 'Unmark as Read';
        }
    })
});

// deleteBtns.forEach(button => {
//     button.addEventListener('click', () => {
//         const box = button.parentNode.parentNode;
//         const id = box.getAttribute('data-book-id');
//         box.remove;
//         bookArray.splice(id,1);
//         console.log(bookArray);
//     })
// });