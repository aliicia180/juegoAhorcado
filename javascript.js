String.prototype.replaceAt = function(index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
};

const palabras = ['casa', 'perro', 'gato', 'elefante'];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;

document.querySelector('#output').innerHTML = palabraConGuiones;

document.querySelector('#calcular').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let haFallado = true;

    for (let i = 0; i < palabra.length; i++) {
        if (letra === palabra[i]) {
            palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
            haFallado = false;
        }
    }

    if (haFallado) {
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(307 * contadorFallos) + 'px 0';
        if (contadorFallos === 4) {
            alert("Has perdido. La palabra era: " + palabra);
            reiniciarJuego();
        }
    } else {
        if (palabraConGuiones.indexOf('_') < 0) {
            alert("¡Victoria!");
            reiniciarJuego();
        }

        document.querySelector('#output').innerHTML = palabraConGuiones;
        document.querySelector('#letra').value = '';
    }
});

function reiniciarJuego() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraConGuiones = palabra.replace(/./g, "_ ");
    contadorFallos = 0;
    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#ahorcado').style.backgroundPosition = '0px 0';
}