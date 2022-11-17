const Classes = {
  ITEM: 'work-grid__item',
  CARD: 'work-card',
  LINK: 'work-card__link',
}

const Attributes = {
  GRID_ITEM: 'data-grid-item',
  TARGET_NUM: 'data-target-num',
  SWAP_SRC: 'data-swap-src',
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
    let isCardFound = false;
    this.items.forEach((item, index) => {
      if (item === target.closest('.' + Classes.ITEM) && !isCardFound) {
        isCardFound = true;
        const imageElemNext = item.querySelector('.image');
        this.swapImageSrc(imageElemNext);

        const temp = this.items[index]
        this.items[index] = this.items[this.targetItemNum]
        this.items[this.targetItemNum] = temp;
        const imageElemPrev = this.items[index].querySelector('.image');
        this.swapImageSrc(imageElemPrev);
      }
    });
  }

  swapImageSrc(item) {
    console.log(item)
    const targetSrc = item.getAttribute(Attributes.SWAP_SRC);
    const srcToSwap = item.getAttribute('src');
    item.setAttribute('src', targetSrc);
    item.setAttribute(Attributes.SWAP_SRC, srcToSwap);
  }

  replaceItems() {
    while (this.block.firstChild) {
      this.block.removeChild(this.block.lastChild);
    }
    this.items.forEach((item) => { this.block.append(item) })
  }
}
