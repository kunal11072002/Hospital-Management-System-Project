const script = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});
function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
  const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
