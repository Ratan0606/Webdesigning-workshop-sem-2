import './style.css';

const app = document.getElementById('app');
const openFormBtn = document.getElementById('openFormBtn');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const registrationForm = document.getElementById('registrationForm');
const popupMessage = document.getElementById('popupMessage');

const showPopup = () => {
    popupMessage.textContent = '';
    popupOverlay.classList.add('show');
};

const hidePopup = () => {
    popupOverlay.classList.remove('show');
};

openFormBtn.addEventListener('click', showPopup);
closePopup.addEventListener('click', hidePopup);
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        hidePopup();
    }
});

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        popupMessage.textContent = 'Passwords do not match!';
        popupMessage.className = 'popup-message error';
        return;
    }

    popupMessage.textContent = 'Registration successful!';
    popupMessage.className = 'popup-message success';
    alert('Registration successful!');

    setTimeout(() => {
        hidePopup();
        registrationForm.reset();
    }, 1000);
});