const form = document.querySelector('#email-form');

function handleSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted');
}

form.addEventListener('submit', handleSubmit);
