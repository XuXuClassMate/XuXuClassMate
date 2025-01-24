// Language switcher
function toggleLanguage() {
    const isEnglish = document.documentElement.lang === 'en';
    document.documentElement.lang = isEnglish ? 'zh' : 'en';
    
    const langBtn = document.querySelector('.lang-text');
    langBtn.textContent = isEnglish ? 'English' : '中文';
    
    document.querySelectorAll('[data-en]').forEach(elem => {
        elem.textContent = isEnglish ? elem.dataset.zh : elem.dataset.en;
    });
}

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}); 