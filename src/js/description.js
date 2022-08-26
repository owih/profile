const Classes = {
	PANEL: 'description',
	PANEL_SHOW: 'description_active',
}

export default class Description {
	constructor(block) {
		this.block = block;
		this.panel = [...document.getElementsByClassName(Classes.PANEL)][0];
		this.dataText = this.block.dataset.description;

		this.mouseEnterListener = this.mouseEnterListener.bind(this);
		this.mouseOutListener = this.mouseOutListener.bind(this);
		if (window.matchMedia('(min-width: 992px)').matches) {
			this.init();
		}
	}

	init() {
		this.block.addEventListener('mouseenter', this.mouseEnterListener);
		this.block.addEventListener('mouseout', this.mouseOutListener);
	}

	mouseEnterListener() {
		this.showPanel();
	}

	mouseOutListener() {
		this.hidePanel();
	}

	showPanel() {
		this.panel.textContent = this.dataText;
		this.panel.classList.add(Classes.PANEL_SHOW);
	}

	hidePanel() {
		this.panel.classList.remove(Classes.PANEL_SHOW);
	}
}
