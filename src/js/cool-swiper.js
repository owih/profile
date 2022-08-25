import Swiper, {EffectCards, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use([EffectCards, Navigation]);

export default class CoolSwiper {
	constructor(block) {
		this.block = block;

		this.init();
	}

	init() {
		this.swiper = new Swiper(this.block, {
			effect: "cards",
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
}
