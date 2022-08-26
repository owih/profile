import Swiper, {EffectCards, Navigation, Pagination, Lazy, Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
Swiper.use([EffectCards, Navigation, Pagination, Lazy, Autoplay]);

export default class CoolSwiper {
	constructor(block) {
		this.block = block;
		this.effect = this.block.dataset.effect;
		this.pagination = !!this.block.dataset.pagination;
		this.loop = !!this.block.dataset.loop;
		this.autoplay = !!this.block.dataset.autoplay;
		this.lazy = !!this.block.dataset.lazy;
		this.slidesPerView = this.block.dataset.slides;
		this.centered = this.block.dataset.centered;

		this.init();
	}

	init() {
		this.swiper = new Swiper(this.block, {
			effect: this.effect || false,
			loop: this.loop,
			autoplay: this.autoplay,
			lazy: this.lazy,
			spaceBetween: this.centered && 30 || 0,
			grabCursor: true,
			centeredSlides: this.centered,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: this.pagination && {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: this.slidesPerView || 1,
				},
				1200: {
					slidesPerView: this.slidesPerView || 1,
				},
			},
		});
	}
}
