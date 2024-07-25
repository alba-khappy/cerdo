/*burger*/

const navBtn = document.querySelector('.header__nav-burger');
const nav = document.querySelector('.burger-nav');
const navBtnClose = document.querySelector('.burger-nav__button-close');

navBtn.onclick = function () {
    nav.classList.add('burger-nav--open');
    document.body.classList.toggle('no-scroll');
};

navBtnClose.onclick = function () {
    nav.classList.remove('burger-nav--open');
}


/*swiper*/

$(document).ready(function(){
    $('.trends__swiper').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      centerMode: false,
      responsive: [
          {
              breakpoint: 1920,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5.5,
              }
          },
          {
              breakpoint: 1281,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 4.5,
              }
          },
          {
              breakpoint: 1000,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3.5,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1.5,
              }
          }
      ]
      });
  });

/*likes*/


let likes = document.querySelectorAll('.trends__like');
let allLikes = 0;
let likedGoods = document.querySelector('.header__nav-link-selected');
likedGoods.innerHTML = allLikes;
  

likes.forEach((like) => {
    like.addEventListener('click', () => {
        if(like.classList.contains('clicked')){
            allLikes -= 1;
            likedGoods.innerHTML = allLikes;
            like.classList.remove('clicked');
        } else {
            allLikes += 1;
            likedGoods.innerHTML = allLikes;
            like.classList.add('clicked');
        }    
    });
})

 