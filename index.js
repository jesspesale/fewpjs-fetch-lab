function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  // .then(json => console.log(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    const h3 = document.createElement('h3')
    h3.innerHTML = "Author: " + book.authors[0]
    const link = document.createElement("h4")
    link.innerHTML = book.url
    main.appendChild(h2);
   main.appendChild(h3);
    main.appendChild(link);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

