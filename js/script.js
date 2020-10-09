const button = document.querySelector('.content-button');
const equis = document.querySelector('.close');

function open(event){
  event.preventDefault;
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function close(event){
  event.preventDefault;
  modal.style.display = 'none';
}

button.addEventListener('click', open);
equis.addEventListener('click', close);