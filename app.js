var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles)); // checks if item is array; returns false
// console.log(Array.isArray(Array.from(titles))); // create array from HTML collection; returns true


Array.from(titles).forEach(function(item){
    console.log(item);
});


//Note: 'titles' initially is NOT an array. It is an html collection

// Lesson 5

// grab all elements with a class of name
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    //console.log(book.textContent); //grabs text in element
    book.textContent += ' (book title)';
});

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';


// Lesson 6: Nodes

// Elements are nodes

// Text, comments, and comments are also nodes

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner node type is:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// Lesson 7: Traversing the DOM Part 1

// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.childNodes);

// console.log(bookList.children);

// Lesson 8: Traversing the DOM Part 2

const bookList = document.querySelector('#book-list');

console.log('book-list next sibiling is:', bookList.nextSibling);
console.log('book-list next element sibiling is:', bookList.nextElementSibling);

console.log('book-list previous sibiling is:', bookList.previousSibling);
console.log('book-list previous element sibiling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';













