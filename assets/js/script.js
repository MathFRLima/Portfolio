const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se já existe uma preferência salva no navegador
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true; // <-- ESTA É A LINHA QUE CORRIGE O BUG
  }

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

// Salva a preferência do usuário no navegador
if (body.classList.contains('dark-mode')) {
  localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});