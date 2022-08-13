const Classes = {
  OPENED: 'sidebar_opened',
  BURGER_ACTIVE: 'sidebar__toggle_active',
}

const Selectors = {
  BURGER: '[data-toggle="burger"]',
}

export default class Sidebar {
  constructor(block) {
    this.block = block;
    this.toggleControl = this.block.querySelectorAll(Selectors.BURGER).item(0);

    this.clickHandler = this.clickHandler.bind(this);
    this.init();
  }

  init() {
    console.log(this.toggleControl)
    this.toggleControl.addEventListener('click', this.clickHandler);
  }

  clickHandler(event) {
    console.log(event.target)
    event.target.classList.toggle(Classes.BURGER_ACTIVE);
    this.block.classList.toggle(Classes.OPENED);
  }
}
