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

// Lesson 9: Events

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});

var btns = document.querySelectorAll('#book-list.delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        const li = e.target.parentElement;
        
        li.parentNode.removeChild(li);
        
        
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault(); // 
    console.log('navigation to ', e.target.textContent, ' was prevented');
});

// Lesson 10: Event Bubbling

const list = document.querySelector('#book-list ul');

// delete books

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// Lesson 11: Interacting with Forms

// document.forms[0];
// document.forms['add-book'];

// Add books

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});

//
































