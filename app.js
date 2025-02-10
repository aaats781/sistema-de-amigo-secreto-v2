let listaNombres = [];


function actualizarLista() {
         
    let listaAmigos =   document.querySelector('#listaAmigos');
        listaAmigos.innerHTML = '';

        listaNombres.forEach ((nombre) => {
            let li = document.createElement('li');
            li.textContent = nombre;
            li.classList.add('nombre-item');
            listaAmigos.appendChild(li);
        });

}

function agregarNombres () {
    
    let input = document.querySelector('#nuevoNombre'); 
    let nombre = input.value.trim();

        if (nombre !== '') {
            listaNombres.push(nombre);
                console.log('Nombre Agregado :', listaNombres);
                input.value = '';
                    actualizarLista(); 
        }   
            else {
                alert('Favor Agregar Nuevo Nombre');
            }
}


function mostrarResultados(asignaciones) {
    let resultadoLista = document.querySelector('#resultado');
    resultadoLista.innerHTML = '';

    for (let persona in asignaciones) {
        let li = document.createElement('li');
        li.textContent = `${persona} → ${asignaciones[persona]}`;
        resultadoLista.appendChild(li);
    }
}



function sortearAmigo() {
       if (listaNombres.length < 2) {
            alert('Debe haber al menos 2 personas para el sorteo.');
                return;
        }

    let nombresDisponibles = [...listaNombres]; 
    let asignaciones = {}; 

    listaNombres.forEach((nombre) => {
        let posibles = nombresDisponibles.filter(n => n !== nombre); 

            if (posibles.length === 0) { 
                alert('Sorteo inválido, intente de nuevo.');
                return;
            }

        let indiceAleatorio = Math.floor(Math.random() * posibles.length);
        let elegido = posibles[indiceAleatorio];

        asignaciones[nombre] = elegido;
        nombresDisponibles = nombresDisponibles.filter(n => n !== elegido); 
    });

    mostrarResultados(asignaciones);
}

