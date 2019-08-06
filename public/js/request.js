const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  // console.log('hello', input.value)
  fetch('/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputValue })
  })
    .then(res => res.json())
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  input.value = '';
})