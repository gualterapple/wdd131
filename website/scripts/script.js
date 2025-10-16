function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function filterBooks(category) {
    const booksNodeList = document.querySelectorAll('.book');
    const booksArray = Array.from(booksNodeList);

    booksArray.forEach(book => {
        if (category === 'all' || book.dataset.category === category) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    localStorage.setItem('contactMessage', JSON.stringify(formData));

    alert(`Mensagem enviada com sucesso, ${formData.name}!`);

    form.reset();
});
