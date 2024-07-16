let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
  navbar.classList.toggle('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
  navbar.classList.remove('active');
}


let login = document.querySelector(".login-form");

document.querySelector('#login').onclick = () => {
    login.classList.toggle("active");
}

let swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

