// TODO: loading screen while sending data, finished form sending

const Selectors = {
	CONTROL: '[data-action="send"]',
	VALIDATE_FIELD: '[data-target="field"]',
	VALIDATE_ICON: '[data-action="show-validate"]',
}

const Classes = {
	ERROR: 'form__input_error',
	SENDING: 'form_sending',
}

export default class Form {
	constructor(block) {
		this.block = block;
		this.sendControl = this.block.querySelector(Selectors.CONTROL);
		this.fields = [...this.block.querySelectorAll(Selectors.VALIDATE_FIELD)];
		this.isValidated = false;
		this.unvalidatedFields = [];

		this.clickControlHandler = this.clickControlHandler.bind(this);
		this.blockInputListener = this.blockInputListener.bind(this);
		this.init();
	}

	init() {
		this.sendControl.addEventListener('click', this.clickControlHandler);
    this.block.addEventListener('submit', this.clickControlHandler);
  }

	clickControlHandler(event) {
    event.preventDefault();
		this.doValidate();
		if (this.isValidated) this.sendData();
	}

	sendData() {
		const formData = new FormData(this.block);
		this.block.classList.add(Classes.SENDING);
		fetch('phpmailer/mail.php', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res)
			.then((data) => {
				if (data.ok) this.dataProcess(data);
			})
      // Doing nothing because we cant process the http requests inside current website host
      .finally(() => alert('Form temporary not working, because website host is Github pages ;('))
	}

	dataProcess() {
		this.block.reset;
		this.block.classList.remove(Classes.SENDING);
	}

	doValidate() {
		const arrayOfFields = [...this.block.querySelectorAll(Selectors.VALIDATE_FIELD)];
		arrayOfFields.forEach((item) => this.checkValidate(item));
		this.setIsValidatetStatus();
		this.startValidateFields();
		this.setValidateToFields();
	}

	startValidateFields() {
		this.block.addEventListener('input', this.blockInputListener);
	}

	blockInputListener(event) {
		const countUnvalidatedFields = this.unvalidatedFields.length;
		const dataAttribute = event.target.dataset.target;
		const field = event.target;

		if (dataAttribute === 'field') this.checkValidate(field);
		this.setIsValidatetStatus();
		if (this.isArrayWasEdited(countUnvalidatedFields)) this.setValidateToFields();
	}

	isArrayWasEdited(countUnvalidatedFields) {
		if (countUnvalidatedFields !== this.unvalidatedFields.length) return true;
	}

	setValidateToFields() {
		this.fields.forEach((item) => item.classList.remove(Classes.ERROR));
		this.unvalidatedFields.forEach((item) => item.classList.add(Classes.ERROR));
	}

	checkValidate(item) {
		const dataAttribute = item.dataset.input;
		const value = item.value;
		const textReg = /\D{3,100}/;
		const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (dataAttribute === 'name' || dataAttribute === 'message') if (!value.toLowerCase().match(textReg)) {
			this.addToArrayUnvalidateField(item);
		} else {
			this.deleteFromArrayOfUnvalidateFields(item);
		}

		if (dataAttribute === 'email') if (!value.toLowerCase().match(emailReg)) {
			this.addToArrayUnvalidateField(item)
		} else {
			this.deleteFromArrayOfUnvalidateFields(item);
		}
	}

	deleteFromArrayOfUnvalidateFields(field) {
		this.unvalidatedFields.forEach((item, index) => {
			if (item === field) this.unvalidatedFields.splice(index, 1);
		});
	}

	addToArrayUnvalidateField(field) {
		const isIncludeField = this.unvalidatedFields.filter((item) => item === field)
		if (!isIncludeField.length) this.unvalidatedFields.push(field);
	}

	setIsValidatetStatus() {
		this.unvalidatedFields.length ? this.isValidated = false : this.isValidated = true;
	}
}
