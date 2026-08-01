const nav = document.querySelector('.top-nav');
const navToggle = document.querySelector('.nav-toggle');
const followToggle = document.querySelector('.follow-toggle');
const authorLinks = document.querySelector('.author-links');
const navLinks = [...document.querySelectorAll('.top-nav a')];
const dropdowns = [...document.querySelectorAll('.nav-dropdown')];

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

followToggle?.addEventListener('click', () => {
  const open = followToggle.getAttribute('aria-expanded') === 'true';
  followToggle.setAttribute('aria-expanded', String(!open));
  authorLinks.classList.toggle('open', !open);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = toggle.getAttribute('aria-expanded') === 'true';
    dropdowns.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
    dropdown.classList.toggle('open', !open);
    toggle.setAttribute('aria-expanded', String(!open));
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

