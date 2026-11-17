document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    const sermonSearch = document.getElementById('sermonSearch');
    if (sermonSearch) {
        const sermonCards = document.querySelectorAll('.sermon-card');
        sermonSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            sermonCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const meta = card.querySelector('.sermon-meta').textContent.toLowerCase();
                if (title.includes(searchTerm) || meta.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});