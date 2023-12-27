const createContactPage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.classList.add('contact');

    const form =  document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Full Name';
    nameInput.setAttribute('id', 'full-name');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'email@email.com';
    emailInput.setAttribute('id', 'email');

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = '555-555-5555';
    phoneInput.setAttribute('id', 'phone-number');

    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.textContent = 'Submit';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(submitInput);

    pageContent.appendChild(form);

    content.appendChild(pageContent);
}

const createInput = (type) => {

}

export {
    createContactPage
}