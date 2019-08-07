const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  console.log('hello', input.value)
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputValue })
  })
    .then(res => res.text())
    .then(data => {
      document.open();
      document.write(data);
      document.close();
    })
    .catch(err => console.log('error', err));

  input.value = '';
})