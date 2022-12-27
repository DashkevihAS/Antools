import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import './index.html';
import './index.scss';

const swiper = new Swiper('.slider__container', {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: '.slider__arrow-next',
    prevEl: '.slider__arrow-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
