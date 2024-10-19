document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
    menu.classList.add('open');
    menuToggle.classList.add('hidden');
  });

  closeMenu.addEventListener('click', function () {
    menu.classList.remove('open');
    menuToggle.classList.remove('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && menu.classList.contains('open')) {
      menu.classList.remove('open');
      menuToggle.classList.remove('hidden');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.remove('open');
      menuToggle.classList.remove('hidden'); // Added to hide the menu toggle after smooth scroll

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
