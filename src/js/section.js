export default class Section {
	constructor(block) {
		this.block = block;
		this.options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.7
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
					const section = entry.target
					this.throwCustomEvent(section);
				}
			})
		}, this.options)
	}

	setObserve() {
		this.observer.observe(this.block)
	}

	throwCustomEvent(section) {
		const id = section.getAttribute('id');
		const customEvent = new CustomEvent('section.observer.toggle', {
			detail: id,
		})
		document.dispatchEvent(customEvent);
	}
}
