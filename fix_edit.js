    // Edit book - load book data into form
    async function editBook(bookId) {
        try {
            // Fetch book details
            const book = await apiCall(`/api/books/${bookId}`);
            
            // Populate form fields
            document.getElementById('bookTitle').value = book.title;
            document.getElementById('bookAuthor').value = book.author;
            document.getElementById('bookISBN').value = book.isbn || '';
            document.getElementById('bookCategory').value = book.category || 'General';
            document.getElementById('bookCopies').value = book.copies;
            document.getElementById('bookYear').value = book.year || '';
            document.getElementById('bookDescription').value = book.description || '';
            
            // Change form to update mode
            const form = document.getElementById('addBookForm');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            // Store book ID for update
            form.dataset.editId = bookId;
            
            // Change button text
            submitBtn.textContent = 'Update Book';
            submitBtn.onclick = function(e) {
                e.preventDefault();
                updateBook(bookId);
            };
            
            // Show add book section
            showSection('addBook');
            
            // Scroll to form
            document.getElementById('addBookSection').scrollIntoView();
            
        } catch (error) {
            alert('Error loading book: ' + error.message);
        }
    }
    
    // Update book
    async function updateBook(bookId) {
        const bookData = {
            title: document.getElementById('bookTitle').value,
            author: document.getElementById('bookAuthor').value,
            isbn: document.getElementById('bookISBN').value || null,
            category: document.getElementById('bookCategory').value,
            copies: parseInt(document.getElementById('bookCopies').value),
            description: document.getElementById('bookDescription').value || ''
        };
        
        if (!bookData.title || !bookData.author || !bookData.copies) {
            alert('Please fill in all required fields (Title, Author, Copies)');
            return;
        }
        
        try {
            const response = await apiCall(`/api/books/${bookId}`, 'PUT', bookData);
            alert('Book updated successfully!');
            resetBookForm();
            loadAllBooks();
            loadDashboardStats();
            showSection('manageBooks');
        } catch (error) {
            alert('Error updating book: ' + error.message);
        }
    }
    
    // Reset book form to add mode
    function resetBookForm() {
        const form = document.getElementById('addBookForm');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        form.reset();
        delete form.dataset.editId;
        submitBtn.textContent = 'Add Book to Library';
        submitBtn.onclick = function(e) {
            e.preventDefault();
            addBook();
        };
    }
    
    // Update clearBookForm to use resetBookForm
    function clearBookForm() {
        resetBookForm();
    }
