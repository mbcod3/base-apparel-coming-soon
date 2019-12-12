const email = document.querySelector('#email')
const error = document.querySelector('#email-err')

email.addEventListener('input', () => {
  email.setCustomValidity('');
})

document.getElementById('submit').addEventListener('click', () => {
  if (!email.checkValidity()) {
    email.classList.add('input-err')
    error.classList.add('err-msg-show')

    if (email.validity.valueMissing) {
      error.innerText = 'Please enter email address'
    } else if (email.validity.typeMismatch) {
      error.innerText = 'Please enter a valid email address'
    }

    email.setCustomValidity(' ');
  } else {
    email.classList.remove('input-error')
    error.classList.remove('err-msg-show')
  }
})