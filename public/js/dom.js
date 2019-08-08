const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
  const input = document.querySelector('.input').value;
  if (!input.trim()) {
    e.preventDefault();
  } 
});
