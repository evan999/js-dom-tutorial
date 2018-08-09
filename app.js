var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles)); // checks if item is array; returns false
// console.log(Array.isArray(Array.from(titles))); // create array from HTML collection; returns true


Array.from(titles).forEach(function(item){
    console.log(item);
});


//Note: 'titles' initially is NOT an array. It is an html collection

