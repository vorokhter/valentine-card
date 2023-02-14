window.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById('btn');
  let valentine = document.getElementById('valentine');

  btn.onclick = showValentine;


  function showValentine() {
    btn.classList.add('hidden');
    valentine.classList.remove('hidden');
  }
});