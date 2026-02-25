const THEME_KEY = 'site-theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.remove('theme-dark');
  }

  const isDark = document.body.classList.contains('theme-dark');
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.textContent = isDark ? 'Modo claro' : 'Modo negro';
  });
}

function toggleTheme() {
  const isDark = document.body.classList.contains('theme-dark');
  const nextTheme = isDark ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
}

const savedTheme = localStorage.getItem(THEME_KEY);
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
  button.addEventListener('click', toggleTheme);
});
