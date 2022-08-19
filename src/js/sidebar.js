const Classes = {
  OPENED: 'sidebar_opened',
  BURGER_ACTIVE: 'sidebar__toggle-icon_active',
  BURGER_MOBILE: 'sidebar_mobile',
  SCROLL_BLOCKED: 'scroll-blocked',
}

const Selectors = {
  BURGER: '[data-toggle="burger"]',
  TOGGLE_ICON: '[data-toggle="icon"]'
}

export default class Sidebar {
  constructor(block) {
    this.block = block;
    this.toggleControl = this.block.querySelectorAll(Selectors.BURGER).item(0);
    this.toggleControlIcon = this.block.querySelectorAll(Selectors.TOGGLE_ICON).item(0);

    this.clickHandler = this.clickHandler.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.init();
  }

  init() {
    this.toggleControl.addEventListener('click', this.clickHandler);
    this.checkWindowSize();
    window.addEventListener('resize', this.resizeHandler);
  }

  checkWindowSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.block.classList.add(Classes.BURGER_MOBILE);
    }
  }

  resizeHandler() {
    if (window.innerWidth <= 768 && !this.block.classList.contains(Classes.BURGER_MOBILE)) this.addMobileClass();
    if (window.innerWidth >= 768 && this.block.classList.contains(Classes.BURGER_MOBILE)) this.removeMobileClass();
    this.addLockClassToBody();
  }

  addMobileClass() {
    this.block.classList.add(Classes.BURGER_MOBILE);
  }

  removeMobileClass() {
    this.block.classList.remove(Classes.BURGER_MOBILE);
  }

  clickHandler() {
    this.toggleControlIcon.classList.toggle(Classes.BURGER_ACTIVE);
    this.block.classList.toggle(Classes.OPENED);
    this.addLockClassToBody();
  }

  addLockClassToBody() {
    if (this.block.classList.contains(Classes.BURGER_MOBILE) && this.block.classList.contains(Classes.OPENED)) {
      document.body.classList.add(Classes.SCROLL_BLOCKED);
      return;
    }
    document.body.classList.remove(Classes.SCROLL_BLOCKED);
  }
}
