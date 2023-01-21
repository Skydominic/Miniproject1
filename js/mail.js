const formmm = document
  .getElementById('contactFormm')
  .addEventListener('submit', submitForm);

const alerttt = document.querySelector('.alert');

function submitForm(e) {
  e.preventDefault();

  //enable alert message
  alerttt.style.display = 'block';
  setTimeout(() => {
    alerttt.style.display = 'none';
  }, 2000);

  document.getElementById('contactFormm').reset();
}

const getElVal = id => {
  return document.getElementById(id).value;
};
