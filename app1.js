const wrap = document.querySelector('#wrapper');
console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2).name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

//querySelector only returns the first selector
//querySelector returns ALL of that selector

Array.from(books).forEach(function(book){
    console.log(book);
});