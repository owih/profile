const Classes = {
  ITEM: 'work-grid__item',
  CARD: 'work-card',
  LINK: 'work-card__link'
}

const Attributes = {
  GRID_ITEM: 'data-grid-item',
  TARGET_NUM: 'data-target-num'
}

export default class WorkGrid {
	constructor(block) {
		this.block = block;
    this.items = Array.from(this.block.getElementsByClassName(Classes.ITEM));
    this.cards = Array.from(this.block.getElementsByClassName(Classes.CARD));
    this.targetItemNum = this.block.getAttribute(Attributes.TARGET_NUM);

    this.clickHandler = this.clickHandler.bind(this);
		this.init();
	}

	init() {
    this.cards.forEach((item) => { item.addEventListener('click', this.clickHandler) })
	}

  clickHandler(e) {
    const target = e.target;
    if (target.classList.contains(Classes.LINK)) return;
    this.rebuildItemsArray(target);
    this.replaceItems();
  }

  rebuildItemsArray(target) {
    let swapTargetItem = null;
    this.items.forEach((item, index) => {
      if (item === target.closest('.' + Classes.ITEM)) swapTargetItem = index;
    });
    const temp = this.items[swapTargetItem]
    this.items[swapTargetItem] = this.items[this.targetItemNum]
    this.items[this.targetItemNum] = temp;
  }

  replaceItems() {
    while (this.block.firstChild) {
      this.block.removeChild(this.block.lastChild);
    }
    this.items.forEach((item) => { this.block.append(item) })
  }
}
