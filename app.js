const accordions = document.querySelectorAll('.accordion');
const accordionArr = Array.from(accordions);
const accordionCard = document.querySelector('#accordion-card');
const imgDiv = document.querySelector('.desktop-index-three');

window.addEventListener('DOMContentLoaded', (e) => {
  imgDiv.classList.remove('active')
})

accordionArr.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active')
  })
})

accordionCard.addEventListener('mouseover', (e) => {
  const target = e.target.parentNode.parentNode.previousElementSibling.parentNode.previousElementSibling.children[2];

  target.classList.add('active')
  // console.log(target);
  // console.log(e.type);
})

accordionCard.addEventListener('mouseout', (e) => {
  const target = e.target.parentNode.parentNode.previousElementSibling.parentNode.previousElementSibling.children[2];

  target.classList.remove('active')
  // console.log(target);
  // console.log(e.type);
})

