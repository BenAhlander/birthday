const menuToggle = document.getElementById('menu-toggle');
const toolbox = document.getElementById('toolbox');

if (menuToggle && toolbox) {
  menuToggle.addEventListener('click', () => {
    toolbox.classList.toggle('open');
  });
}

// tiny easter egg: clicking the title triggers a simple bounce
const title = document.querySelector('.titlebar h1');
if (title) {
  title.addEventListener('click', () => {
    if (!title.dataset.clicked) {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        title.animate([{transform:'scale(1)'},{transform:'scale(1.1)'},{transform:'scale(1)'}],{duration:300});
      }
      title.dataset.clicked = 'true';
    }
  });
}
