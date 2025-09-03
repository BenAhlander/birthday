// Birthday Celebration Animations
function createBalloons() {
  const balloonsContainer = document.createElement('div');
  balloonsContainer.className = 'balloons';
  document.body.appendChild(balloonsContainer);

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement('div');
    balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDelay = Math.random() * 3 + 's';
    balloonsContainer.appendChild(balloon);
  }

  // Remove balloons after animation
  setTimeout(() => {
    balloonsContainer.remove();
  }, 11000);
}

function createFireworks() {
  const fireworksContainer = document.createElement('div');
  fireworksContainer.className = 'fireworks';
  document.body.appendChild(fireworksContainer);

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white'];
  
  function createFirework() {
    const firework = document.createElement('div');
    firework.className = `firework ${colors[Math.floor(Math.random() * colors.length)]}`;
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 60 + 20 + '%';
    firework.style.animationDelay = Math.random() * 0.5 + 's';
    fireworksContainer.appendChild(firework);

    // Remove firework after animation
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }

  // Create multiple fireworks
  for (let i = 0; i < 8; i++) {
    setTimeout(createFirework, i * 300);
  }

  // Remove container after all fireworks
  setTimeout(() => {
    fireworksContainer.remove();
  }, 5000);
}

function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti';
  document.body.appendChild(confettiContainer);

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = `confetti-piece ${colors[Math.floor(Math.random() * colors.length)]}`;
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

function showWelcomeMessage() {
  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcome-message';
  welcomeDiv.innerHTML = `
    <h2>🎉 Welcome to Ben's 30th! 🎂</h2>
    <p>🎮 Get ready for an epic Y2K celebration! 🚀</p>
    <p>🎊 Balloons, fireworks, and tons of fun await! 🎈</p>
  `;
  document.body.appendChild(welcomeDiv);

  // Remove welcome message after 3 seconds
  setTimeout(() => {
    welcomeDiv.remove();
  }, 3000);
}

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Start celebration on page load
document.addEventListener('DOMContentLoaded', () => {
  if (!prefersReducedMotion) {
    // Show welcome message first
    showWelcomeMessage();
    
    // Start balloons after a short delay
    setTimeout(createBalloons, 500);
    
    // Start fireworks after balloons
    setTimeout(createFireworks, 2000);
    
    // Start confetti
    setTimeout(createConfetti, 1000);
  }
});

// Existing functionality
const menuToggle = document.getElementById('menu-toggle');
const toolbox = document.getElementById('toolbox');

if (menuToggle && toolbox) {
  menuToggle.addEventListener('click', () => {
    const open = toolbox.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
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
