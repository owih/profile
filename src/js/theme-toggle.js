const Classes = {
	THEME: 'light',
}

const Selectors = {
	CHECKBOX: '[data-target="checkbox"]',
}

export default class ThemeToggle {
	constructor(block) {
		this.block = block;
		this.checkbox = this.block.querySelector(Selectors.CHECKBOX);

		this.inputHandler = this.inputHandler.bind(this);
		this.init();
	}

	init() {
		this.switchThemeFromLocalStore();
		this.block.addEventListener('input', this.inputHandler);
	}

	switchThemeFromLocalStore() {
		if (!localStorage.theme) return;
		this.switchTheme(true);
		this.checkbox.checked = true;
	}

	inputHandler() {
		this.switchTheme();
		if (this.checkbox.checked) {
			this.addToLocalStorage();
			return;
		}
		this.deleteFromLocalStorage();
	}

	addToLocalStorage() {
		localStorage.theme = 'light';
	}

	deleteFromLocalStorage() {
		localStorage.removeItem('theme');
	}

	switchTheme(theme) {
		if (theme) document.body.classList.remove(Classes.THEME);
		document.body.classList.toggle(Classes.THEME);
	}
}
