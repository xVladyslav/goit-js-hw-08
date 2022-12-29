import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const { email, message } = form.elements;
const savedValues = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedValues) {
    email.value = savedValues.email;
    message.value = savedValues.message;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        email: email.value,
        message: message.value
    }

    if (!formData.email || !formData.message) {
        alert('Всі поля повинні бути заповнені.');
        return;
    }

    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
})

form.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: email.value,
        message: message.value
    }))
}, 500))
