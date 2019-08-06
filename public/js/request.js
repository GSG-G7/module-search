const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('hello', input.value)
  fetch(`/search?query=${input.value}`)
    .then(res => res.json())
    .catch(err => console.log(err));
})