const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const liElements = document.querySelectorAll('li');
const h1 = document.querySelector('h1');

modeToggle.addEventListener('click', function() {
  body.classList.toggle('light-mode');
  nav.classList.toggle('light-mode');
  liElements.forEach(li => li.classList.toggle('light-mode'));
  h1.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', function() {
  navList.classList.toggle('show');
  
});