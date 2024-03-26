const form = document.getElementById('form-valido');

function validaForm(g, j) {
    if(g > j) {
        alert("Não é válido!");
    } else if(g < j) {
        alert("É válido");
    }
}

form.addEventListener('submit', function(e){
    //e.preventDefault();

    const _valorA = document.getElementById('valorA');
    const _valorB = document.getElementById('valorB');

    validaForm(_valorA.value, _valorB.value);
})

console.log(form);