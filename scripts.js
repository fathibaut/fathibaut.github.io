var books = [
    { title: "Déclaration grossesse", author: "Archives départementales de Nice", file: "AD.Declaration.Tourettes" },
    { title: "Les Misérables", author: "Victor Hugo", file: "les_miserables.pdf" },
    { title: "Cyrano de Bergerac", author: "Edmond Rostand", file: "cyrano_de_bergerac.pdf" },
    // Ajoute plus de livres ici
];

function displayBooks(bookList) {
    var bookListContainer = document.getElementById('book-list');
    bookListContainer.innerHTML = '';

    for (var i = 0; i < bookList.length; i++) {
        var book = bookList[i];

        var bookElement = document.createElement('div');
        bookElement.className = 'book';
        
        var bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        var bookAuthor = document.createElement('p');
        bookAuthor.textContent = 'Auteur: ' + book.author;

        var bookLink = document.createElement('a');
        bookLink.href = 'Documents/' + book.file;
        bookLink.textContent = "Lire le document";
        // bookLink.target = "_blank"; Ouvre le lien dans un nouvel onglet

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookLink);

        bookListContainer.appendChild(bookElement);
    }
}

var searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function(e) {
    var searchTerm = e.target.value.toLowerCase();
    var filteredBooks = books.filter(function(book) {
        return book.title.toLowerCase().includes(searchTerm) || 
               book.author.toLowerCase().includes(searchTerm);
    });
    displayBooks(filteredBooks);
});

// Afficher tous les livres par défaut
displayBooks(books);
