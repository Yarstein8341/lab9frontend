class FormGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.fields = [];
        this.submitHandler = null;
    }

    addInput(type, label) {
        const input = document.createElement('input');
        input.setAttribute('type', type);

        const labelElem = document.createElement('label');
        labelElem.textContent = label;

        const br = document.createElement('br');

        this.fields.push({ input, labelElem, br });
    }

    addButton(label, clickHandler) {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', clickHandler);

        const br = document.createElement('br');

        this.fields.push({ button, br });
    }

    setSubmitHandler(submitHandler) {
        this.submitHandler = submitHandler;
    }


    validateForm() {
        let isValid = true;
        this.fields.forEach(field => {
            if (field.input && field.input.hasAttribute('required') && field.input.value.trim() === '') {
                isValid = false;
                alert(`${field.labelElem.textContent} є обов'язковим полем`);
            }
        });
        return isValid;
    }

    generateForm() {
        this.fields.forEach(field => {
            if (field.input) {
                this.container.appendChild(field.labelElem);
                this.container.appendChild(field.input);
                this.container.appendChild(field.br);
            } else if (field.button) {
                this.container.appendChild(field.button);
                this.container.appendChild(field.br);
            }
        });

        if (this.submitHandler) {
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Submit';
            submitButton.type = 'submit';

            submitButton.addEventListener('click', event => {
                event.preventDefault();
                if (this.validateForm()) {
                    this.submitHandler();
                }
            });

            this.container.appendChild(submitButton);
        }
    }
}

const form = new FormGenerator('formContainer');

form.addInput('text', 'Ім\'я:');
form.addInput('email', 'Електронна пошта:');
form.addInput('password', 'Пароль:');
form.addButton('Надіслати', () => {
    const name = form.fields[0].input.value;
    const email = form.fields[1].input.value;
    const password = form.fields[2].input.value;

    console.log('Ім\'я:', name);
    console.log('Електронна пошта:', email);
    console.log('Пароль:', password);
});

form.generateForm();