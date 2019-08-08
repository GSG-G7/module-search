const form = document.getElementById('form');
const span = document.querySelector('.errorMsg');

form.addEventListener('submit', (e) => {
  const input = document.querySelector('.input').value;
  if (!input.trim()) {
    e.preventDefault();
    span.textContent = 'Enter valid npm package';
  } else span.textContent = '';
});
