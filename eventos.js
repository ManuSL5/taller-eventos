const divButton = document.getElementById('divButton');
const button = divButton.querySelector('button');
button.removeAttribute('onclick');

divButton.addEventListener('click', function(){
    alert('¡Hola!, soy el div');
});

// button.addEventListener('click', function(event){
//     event.stopPropagation();
// });
