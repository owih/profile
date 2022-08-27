export default class Animation {
	constructor(block) {
		this.block = block;
		this.timeout = this.block.dataset.animation;
		this.options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		}

		this.init();
	}

	init() {
		this.createObserver();
		this.setObserve();
	}

	createObserver() {
		this.observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.setAnimationClasses();
				}
			})
		}, this.options)
	}

	setObserve() {
		this.observer.observe(this.block)
	}

	setAnimationClasses() {
		this.block.classList.add('animated');
	}
}
