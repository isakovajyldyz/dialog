let callbtn = document.querySelector('.call')
let overlay = document.querySelector('.overlay')

let closebtn = document.querySelector('.overlay__close')

callbtn.onclick = function () {
   overlay.style.display = 'flex'
}
closebtn.onclick = function () {
   overlay.style.display = 'none'
}
overlay.onclick = function (event) {
if (event.target.classlist.contains('overlay')){
   overlay.style.display = 'none'
}
}
let im = new Inputmask("+\\9\\96 (999) 99-99-99");
let formtel = document.querySelector('#tel')

im.mask (formtel);



$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
   $(this)
       .addClass('active').siblings().removeClass('active')
       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});