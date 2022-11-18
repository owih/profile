export default class Animation {
	constructor(block) {
		this.block = block;
		this.timeout = this.block.dataset.animation;
    this.isAnimated = false;
		this.options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		}

		this.init();
	}

	init() {
    console.log(this.block)
		this.createObserver();
		this.setObserve();
	}

	createObserver() {
		this.observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !this.isAnimated) {
          this.isAnimated = true;
          console.log(this.block)
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
