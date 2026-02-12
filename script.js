const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const yearSpan = document.querySelector('#year');
const listingCards = document.querySelectorAll('[data-bright-url]');

yearSpan.textContent = new Date().getFullYear();

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

listingCards.forEach((card) => {
  const linkTarget = card.dataset.brightUrl;
  if (!linkTarget) return;

  const actions = document.createElement('div');
  actions.className = 'listing-actions';

  const link = document.createElement('a');
  link.className = 'listing-link';
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = 'Open on Bright MLS';
  link.href = linkTarget;

  actions.appendChild(link);
  card.appendChild(actions);
});
