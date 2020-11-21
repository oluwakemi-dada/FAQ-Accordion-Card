const accordions = document.querySelectorAll('.accordion');
const accordionArr = Array.from(accordions);
const accordionCard = document.querySelector('.accordion-card');

accordionArr.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});
