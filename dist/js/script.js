document.addEventListener("DOMContentLoaded", function () {
  // For mobile menu
  let burger = document.querySelector('.burger')
  let mobileMenu = document.querySelector('.mobile-menu__nav')
  burger.onclick = function () {
      if(burger.classList.contains('active')){
          burger.classList.remove('active')
          mobileMenu.classList.remove('active')
      } else{
          burger.classList.add('active')
          mobileMenu.classList.add('active')
      }
  }

  let number = document.querySelector('.customers'),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML, end = +number.dataset.max

  console.log(number);
  console.log(numberTop);
  console.log(start);
  console.log(end);
})
