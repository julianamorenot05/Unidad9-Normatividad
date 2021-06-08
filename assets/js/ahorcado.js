String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 

let imagenesAhorcado = ["ahorcado-8.png","ahorcado-7.png", "ahorcado-6.png", 
    "ahorcado-5.png", "ahorcado-4.png", "ahorcado-3.png",
    "ahorcado-2.png","ahorcado-1.png","ahorcado-0.png"];

/*let imagenesAhorcado = new Array(
    new Array("ahorcado-9.png")
);*/

const palabra = 'señalizaciondeseguridad';

var palabraGuiones = palabra.replace(/./g, "_ ");

var contFallos = 0;
var contIntentos = 13;


document.querySelector("#palabraAhorcado").innerHTML = palabraGuiones;
document.querySelector("#cantOportunidad").innerHTML = contIntentos + " Oportunidades";

function validadLetraAhorcado(letra){

    let haFallado = true;
    
    for(const i in palabra){
        if (letra == palabra[i]) {
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }
    if(haFallado){
        contFallos++;

        var html = "<img style='height: 300px;' src='./assets/image/"+imagenesAhorcado[contFallos-1]+"' />";
            document.getElementById("dibujoAhorcado").innerHTML = html;

        if (contFallos >= 10) {
            document.getElementById("dibujoAhorcado").innerHTML = "<img style='height: 300px;' src='./assets/image/ahorcado-9.png'/>";
        }
        if (contIntentos == 1) {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error',
            )
            document.querySelector("#palabraAhorcado").innerHTML = '';
            document.querySelector("#cantOportunidad").innerHTML = 0 + " Oportunidades";
            
        }
        if (contIntentos < 1) {
            document.querySelector("#palabraAhorcado").innerHTML = '';
            document.querySelector("#cantOportunidad").innerHTML = 0 + " Oportunidades";
            location.reload();
        }

        contIntentos --;
    }else{
        if (palabraGuiones.indexOf('_') < 0) {
            Swal.fire({
                title: '¡Buen trabajo!',
                text: 'Has seleccionado correctamente todos los elementos',
                icon: 'success',
                showDenyButton: true,            
                confirmButtonText: 'Jugar de nuevo',
                denyButtonText: 'Terminar'
            });
        }
    }

    document.querySelector("#palabraAhorcado").innerHTML = palabraGuiones;
    document.querySelector("#cantOportunidad").innerHTML = contIntentos + " Oportunidades";
}

