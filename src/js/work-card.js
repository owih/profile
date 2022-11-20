const Selectors = {
  PLAY_PAUSE: '[data-play-pause]',
  SWAP_SRC: 'data-swap-src',
  HAS_PREVIEW: 'data-has-preview',
  LAZY_SRC: 'data-lazy-src'
}

const Classes = {
  PAUSE: 'work-card_playing'
}

export default class WorkCard {
	constructor(block) {
    this.block = block;
    this.image = this.block.querySelector('.image');
    this.imageSrc = this.image.getAttribute(Selectors.LAZY_SRC) || this.image.getAttribute('src');
    this.gifSrc = this.image.getAttribute(Selectors.SWAP_SRC);
    this.playPauseControl = this.block.querySelector(Selectors.PLAY_PAUSE);
    this.isPlaying = false;

    this.clickHandler = this.clickHandler.bind(this);
    this.pause = this.pause.bind(this);
		this.init();
	}

	init() {
    if (!this.block.hasAttribute(Selectors.HAS_PREVIEW)) return;
    this.playPauseControl.addEventListener('click', this.clickHandler);
    document.addEventListener(`pause-${this.block.getAttribute('id')}`, this.pause);
	}

  clickHandler() {
    this.isPlaying ? this.pause() : this.play();
  }

  play() {
    this.isPlaying = true;
    this.image.setAttribute('src', this.gifSrc);
    this.block.classList.add(Classes.PAUSE);
  }

  pause() {
    this.isPlaying = false;
    this.image.setAttribute('src', this.imageSrc);
    this.block.classList.remove(Classes.PAUSE);
  }
}
