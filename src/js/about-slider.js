import Swiper, {Navigation, Pagination, Lazy} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
Swiper.use([Navigation, Pagination, Lazy]);

export default class AboutSlider {
  constructor(block) {
    this.block = block;
    this.paginationTitles = this.block.querySelectorAll('[data-pagination]');
    this.initialSlide = Number(this.block.getAttribute('data-active-slide')) - 1;

    this.init();
  }

  init() {
    this.swiperIns = new Swiper(this.block, {
      initialSlide: this.initialSlide,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<div class="' + className + ' about-slider__pagination-item' + '">'
            + '<span>' + this.paginationTitles[index].getAttribute('data-pagination') + '</span>'
            + "</div>"
        },
      },
    });
  }
}
