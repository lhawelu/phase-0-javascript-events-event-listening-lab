function addingEventListener() {
  const input = document.getElementById('input');
  const anotherInput = document.querySelector('div div div div div')

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert); 
  anotherInput.addEventListener('click', clickAlert); 
}

addingEventListener();
