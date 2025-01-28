const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'light'); 
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
});