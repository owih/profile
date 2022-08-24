export default class ScrollTo {
	constructor(block) {
		this.block = block;
		this.targetId = this.block.dataset.target;
		this.target = document.querySelector('#' + this.targetId);

		this.clickHandler = this.clickHandler.bind(this);
		this.init();
	}

	init() {
		this.block.addEventListener('click', this.clickHandler);
	}

	clickHandler(event) {
		event.preventDefault();
		this.target.scrollIntoView({behavior: "smooth", block: "start"});
	}
}
