import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});