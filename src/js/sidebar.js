const Classes = {
  OPENED: 'sidebar_opened',
  BURGER_ACTIVE: 'sidebar__toggle-icon_active',
  MOBILE: 'sidebar_mobile',
  ACTIVE_LINK: 'sidebar__link_active',
  SCROLL_BLOCKED: 'scroll-blocked',
  SECTIONS: 'section',
  SECTION_HIDDEN: 'section_hidden',
}

const Selectors = {
  BURGER: '[data-toggle="burger"]',
  TOGGLE_ICON: '[data-toggle="icon"]',
  LINK: '[data-action="scrollTo"]'
}

export default class Sidebar {
  constructor(block) {
    this.block = block;
    this.toggleControl = this.block.querySelectorAll(Selectors.BURGER).item(0);
    this.toggleControlIcon = this.block.querySelectorAll(Selectors.TOGGLE_ICON).item(0);
    this.links = [...this.block.querySelectorAll(Selectors.LINK)];
    this.sectionsArray = [...document.getElementsByClassName(Classes.SECTIONS)];

    this.toggleActiveLink = this.toggleActiveLink.bind(this);
    this.clickControlHandler = this.clickControlHandler.bind(this);
    this.clickBlockHandler = this.clickBlockHandler.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.init();
  }

  init() {
    this.sectionToggleListener();
    this.toggleControl.addEventListener('click', this.clickControlHandler);
    this.block.addEventListener('click', this.clickBlockHandler);
    this.checkWindowSize();
    window.addEventListener('resize', this.resizeHandler);
  }

  clickBlockHandler(event) {
    if (event.target
        && event.target.dataset.action === 'scrollTo'
        && this.block.classList.contains(Classes.MOBILE)) {
      this.toggleMenu();
    }
  }

  checkWindowSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.block.classList.add(Classes.MOBILE);
    }
  }

  resizeHandler() {
    if (window.innerWidth <= 768 && !this.block.classList.contains(Classes.MOBILE)) this.addMobileClass();
    if (window.innerWidth >= 768 && this.block.classList.contains(Classes.MOBILE)) this.removeMobileClass();
    this.addLockClassToBody();
  }

  addMobileClass() {
    this.block.classList.add(Classes.MOBILE);
  }

  removeMobileClass() {
    this.block.classList.remove(Classes.MOBILE);
  }

  clickControlHandler() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.toggleControlIcon.classList.toggle(Classes.BURGER_ACTIVE);
    this.block.classList.toggle(Classes.OPENED);
    this.addLockClassToBody();
    if (this.sectionsArray.length) this.sectionsArray.forEach((item) => { item.classList.toggle('section_hidden') });
  }

  addLockClassToBody() {
    if (this.block.classList.contains(Classes.MOBILE) && this.block.classList.contains(Classes.OPENED)) {
      document.body.classList.add(Classes.SCROLL_BLOCKED);
      return;
    }
    document.body.classList.remove(Classes.SCROLL_BLOCKED);
  }

  sectionToggleListener() {
    document.addEventListener('section.observer.toggle', this.toggleActiveLink);
  }

  toggleActiveLink(event) {
    const id = event.detail;
    const link = this.links.filter((link) => link.dataset.target === id);
    this.removeActiveClassFromLinks();
    link.forEach((item) => this.addClassActiveToLink(item))
  }

  addClassActiveToLink(item) {
    item.classList.add(Classes.ACTIVE_LINK);
  }

  removeActiveClassFromLinks() {
    this.links.forEach((item) => item.classList.remove(Classes.ACTIVE_LINK));
  }
}
