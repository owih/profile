export default class Section {
	constructor(block) {
		this.block = block;
    this.sectionNumber = Number(this.block.getAttribute('data-section'));
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
          this.processImageLazy();
				}
			})
		}, this.options)
	}

  processImageLazy() {
    const prevSection = document.querySelector(`[data-section="${this.sectionNumber - 1}"]`);
    const nextSection = document.querySelector(`[data-section="${this.sectionNumber + 1}"]`);
    const currentSection = this.block;
    if (currentSection && !currentSection.getAttribute('data-loading')) {
      currentSection.setAttribute('data-loading', '');
      const imagesOnSection = currentSection.querySelectorAll('[data-lazy-src]');
      imagesOnSection.forEach((item) => item.setAttribute('src', item.getAttribute('data-lazy-src')));
    }
    if (nextSection && !nextSection.getAttribute('data-loading')) {
      nextSection.setAttribute('data-loading', '');
      const imagesOnSection = nextSection.querySelectorAll('[data-lazy-src]');
      imagesOnSection.forEach((item) => item.setAttribute('src', item.getAttribute('data-lazy-src')));
    }
    if (prevSection && !prevSection.getAttribute('data-loading')) {
      prevSection.setAttribute('data-loading', '');
      const imagesOnSection = prevSection.querySelectorAll('[data-lazy-src]');
      imagesOnSection.forEach((item) => item.setAttribute('src', item.getAttribute('data-lazy-src')));
    }
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
