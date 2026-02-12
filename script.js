const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const yearSpan = document.querySelector('#year');
const listingCards = document.querySelectorAll('[data-address]');

yearSpan.textContent = new Date().getFullYear();

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

const buildBrightSearchUrl = (address) => {
  const encoded = encodeURIComponent(address.trim());
  return `https://www.brightmlshomes.com/homes-for-sale/searchresults?Address=${encoded}`;
};

listingCards.forEach((card) => {
  const manualUrl = card.dataset.brightUrl;
  const address = card.dataset.address;

  if (!address) return;

  const linkTarget = manualUrl || buildBrightSearchUrl(address);
  let link = card.querySelector('.listing-link');

  if (!link) {
    link = document.createElement('a');
    link.className = 'listing-link';
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'Open on Bright MLS';
    const actions = document.createElement('div');
    actions.className = 'listing-actions';
    actions.appendChild(link);
    card.appendChild(actions);
  }

  link.href = linkTarget;
});
