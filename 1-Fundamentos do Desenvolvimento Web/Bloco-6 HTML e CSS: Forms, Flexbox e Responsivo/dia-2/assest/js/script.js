
document.getElementById('date').DatePickerX.init();

const button = document.getElementById('buttonSubmit');



function preserve(e){
e.preventDefault();
}

button.addEventListener('click', preserve)