const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const themeStorageKey = 'univomap-theme';

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  themeToggle.querySelector('.theme-toggle-label').textContent = isDark ? 'Claro' : 'Oscuro';
  localStorage.setItem(themeStorageKey, theme);
}

const savedTheme = localStorage.getItem(themeStorageKey);
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

themeToggle.addEventListener('click', () => {
  setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('click', (event) => {
  const clickedInsideNav = event.target.closest('nav');
  if (!clickedInsideNav) {
    setMenu(false);
  }
});