$(document).ready(function() {
    iniciarJuegoArrastre("juegoArrastre");
})

function iniciarJuegoArrastre(idContenedorJuego) {
    document.getElementById(idContenedorJuego).innerHTML = 
    `
        <div class="col-md-2" style="padding:5px;">
            <button id="conceptoArrastre1" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Reactivos</button>
            <button id="conceptoArrastre2" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Fabricación de suelos</button>
            <button id="conceptoArrastre3" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Sustancias químicas</button>
            <button id="conceptoArrastre4" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Elementos de vidrio</button>
            <button id="conceptoArrastre5" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Sustancia ácida</button>
        </div>
        <div class="col-md-2"  style="padding:5px;">
            <button id="conceptoArrastre6" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Laboratorio</button>
            <button id="conceptoArrastre7" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Bata</button>
            <button id="conceptoArrastre8" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Monofásico</button>
            <button id="conceptoArrastre9" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Elementos de protección</button>
            <button id="conceptoArrastre10" class="button-tab-amarillo-claro"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Medición eléctrica</button>
        </div>
        <div class="col-md-7">
            <div id="contenedor" 
                class="row caja-texto-y" 
                style="border-style: dashed; min-height: 350px; text-align:center"
                ondrop="drop(this, event)" 
                ondragenter="dragenter(this, event)" 
                ondragover="dragover(event)" 
                ondragleave="dragleave(this, event)">
                <p style="width:100%; text-align:center">Arrastre aquí</div>
            </div>
        </div>
        <div class="col-md-11" style="text-align: right; margin-top: 20px;">
            <button onclick="reiniciarJuegoArrastre('${idContenedorJuego}')" class="btn btn-info">Reiniciar</button>
            <button onclick="validarJuegoArrastre('${idContenedorJuego}')" class="btn btn-warning">Verficar</button>
        </div>    
    `;    
}

function dragstart(caja, event) {
    // el elemento a arrastrar
    document.getElementById(caja.id).className = "in button-tab-amarillo-claro";
    event.dataTransfer.setData('Data', caja.id);
}

function drag(caja, event) {
    return false;
}

function dragend(caja, event) {
    document.getElementById(caja.id).className = "out button-tab-amarillo-claro";
    return false;
}

function dragenter(target, event) {
    document.getElementById("contenedor").className = "inContainer caja-texto-y";
    return false;
}

function dragleave(target, event) {
    document.getElementById("contenedor").className = "outContainer caja-texto-y";
    return false;
}

function dragover(event) {
    event.preventDefault();

    return false;
}

function drop(target, event) {
    // obtenemos los datos
    var caja = event.dataTransfer.getData('Data');
    document.getElementById("contenedor").className = "outContainer caja-texto-y";
    // agregamos el elemento de arrastre al contenedor
    target.appendChild(document.getElementById(caja));
}

function reiniciarJuegoArrastre(idContenedorJuego) {
    iniciarJuegoArrastre("juegoArrastre");
}

let intentosArrastre = 0; 
function validarJuegoArrastre(idContenedorJuego) {
    content = document.getElementById("contenedor");
    buttons = content.getElementsByTagName("button");    

    if(buttons.length > 7) {
        Swal.fire({
            title: '¡Lo siento!',
            text: 'Intentálo nuevamente',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        }) 
        intentosArrastre++;        
    } else if(buttons.length < 7) {
        Swal.fire({
            title: '¡Lo siento!',
            text: 'Intentálo nuevamente',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        })   
        intentosArrastre++;       
    } else {
        var exitoso = true;

        for (let index = 0; index < buttons.length; index++) {
            const button = buttons[index];
            if (button.getAttribute("id") == "conceptoArrastre2" | "conceptoArrastre8" | "conceptoArrastre10") {
                exitoso = false;
                intentosArrastre++;
            }       
        }

        if(exitoso) {
            Swal.fire({
                title: '¡Buen trabajo!',
                text: 'Has identificado correctamente todos los conceptos básicos de las buenas prácticas generales en el laboratorio de química',
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    init();
                }
            })            
        } else {
            Swal.fire({
                title: '¡Lo siento!',
                text: 'Intentálo nuevamente',
                icon: 'warning'
            }).then((result) => {
                if (result.isConfirmed) {
                    init();
                }
            })   
        }
    }

    if (intentosArrastre > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosArrastre = 0;
        goToActivities(); 
    }  
}