let arraytruefalse = [false,false,false];
let arraytruefalse2 = [false, false, false];

/**
 * Controlador Transistores
 */

/**
 * Habilita una de las dos tarjetas asociadas al controlador
 * @param {string} transistor 
 */
function enableBjt(transistor){
    $(".tarjetaTransistoresBjt").hide();

    switch (transistor) {
        case 'interruptor':
            $("#bjtInterruptor").show();
            bjt(1);
            break;
            
        case 'amplificador':
            $("#bjtAmplificador").show();
            bjt(2);
            break;
            
        default:
            break;
    }
}

/**
 * Habilita los párrafos de los circuitos
 */
function enableParrafosCircuitos(){
    $("#parrafosCircuitos").show();
    Circuitos(1);

}

/**
 * Permite ocultar y mostrar sólo la tarjeta de interés
 */
$(".btnVariadorVelocidad").click(function () {
   var number = $(this).attr("data-number");
   
    $(".aplicacionesVariadorVelocidad").hide();
    $("#aplicacionVariadorVelocidad_"+number).show();
});

/**
 * Efecto card
 */
$('.card_animada').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
    cardanimada(numeroTarjeta);
});

/**
 * Función para calificar el ejercicio de aprendizaje 2
 */
var intentosSeleccionMultiple=0;
function seleccionMultiple() {

    var pregunta_1 = $("input[name='pregunta_1']:checked").val();
    var pregunta_2 = $("input[name='pregunta_2']:checked").val();
    var pregunta_3 = $("input[name='pregunta_3']:checked").val();
    $("#calificacionEjercicio_1").show();

    if(!(pregunta_1 && pregunta_2 && pregunta_3)) {
        $("#calificacionEjercicio_1").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_1 == "c"){
        calificacion++;
        $("#pregunta_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2 == "a") {
        calificacion++;
        $("#pregunta_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_3 == "b") {
        calificacion++;
        $("#pregunta_3").css("background-color", "rgb(57 236 36 / 20%)");
    } 

    $("#calificacionEjercicio_1").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple();
            }
        })
    } else{
        intentosSeleccionMultiple++;

        if(intentosSeleccionMultiple >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple = 0;
            replaySeleccionMultiple();
            goToActivities();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple() {
    $("#calificacionEjercicio_1").hide();
    $("#pregunta_1").css("background-color", "white");
    $("#pregunta_2").css("background-color", "white");
    $("#pregunta_3").css("background-color", "white");
    $("input[name=pregunta_1]").prop("checked", false);
    $("input[name=pregunta_2]").prop("checked", false);
    $("input[name=pregunta_3]").prop("checked", false);
}

/**
 * Controla el aparecer u ocultar las tarjetas de control
 */
$(".btnAplicacionesControl").click(function() {
    var idContenido = $(this).attr("data-idContenido");

    $(".aplicacionesControl").hide();
    $("#"+idContenido).show();
    //alert(idContenido);
    AplicacionesControlAudio(idContenido);
})

/**
 * Hay un ejercicio de aprendizaje que requiere falso o verdadero
 */
 $(".actividadtruefalse label").checkbox({
    checked: "assets/image/cb2-1.png",
    check: "assets/image/cb2-0.png",
    onChange: function(i) {
          switch (i[0].name) {
            case "r1":
              if (i[0].value==="1") {
                  arraytruefalse[0]=true;
              } else {
                  arraytruefalse[0]=false;
              }
              break;
            case "r2":
              if (i[0].value==="0") {
                  arraytruefalse[1]=true;
              } else {
                  arraytruefalse[1]=false;
              }
              break;
            case "r3":
              if (i[0].value==="1") {
                  arraytruefalse[2]=true;
              } else {
                  arraytruefalse[2]=false;
              }
              break;
            
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
    },
    onLoad: function(i) {
      // do something
    }
  });

  /** Falso o verdadero 2 */
  

  $(".actividadtruefalse2 label").checkbox({
    checked: "assets/image/cb2-1.png",
    check: "assets/image/cb2-0.png",
    onChange: function(i) {
          switch (i[0].name) {
            case "r21":
              if (i[0].value==="1") {
                  arraytruefalse2[0]=true;
              } else {
                  arraytruefalse2[0]=false;
              }
              break;
            case "r22":
              if (i[0].value==="0") {
                  arraytruefalse2[1]=true;
              } else {
                  arraytruefalse2[1]=false;
              }
              break;
            case "r23":
              if (i[0].value==="1") {
                  arraytruefalse2[2]=true;
              } else {
                  arraytruefalse2[2]=false;
              }
              break;
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
    },
    onLoad: function(i) {
      // do something
    }
  });

  /**
   * Permite habilitar las tarjetas SCR
   */
  function verTarjetasSCR() {      
      $(".tarjetasAplicacionesSCR").show();
      tarjetasAplicacionesSCRAudio(1);
  }


  /**
   * Se controla la botonera de aplicaciones del SCR y TRIAC
   */
  $('.btnAplicacionesSCR').off('click').on('click', function () {
    var numt = $(this).text();

    $('.botoneraAplicacionesSCR').hide();
    $('#aplicacionSCR_vista' + numt).show().css({ 'opacity': 0, 'bottom': '-100px' })
        .animate({ 'opacity': '1', 'bottom': 0 }, 1000);
    botoneraAplicacionesSCR(numt);
    
});

/**
 * Configuración del canvas
 * @param {La inicialización del canvas, ésta debe llevar el id} canvas 
 * @param {El evento fabric que permite adicionar imágenes nuevas al canvas} fabric 
 * @param {La dirección de la imagen que se quiere adicionar} pathImage 
 * @param {La posición de la imagen (left, top)} position 
 * @param {Tamaño de la imagen dentro del canvas (height, width)} size 
 * @param {Lo que se quiere que haga una vez se de clic sobre la imagen} eventFunction 
 */
function configureCanvas(canvas, fabric, pathImage, position, size, eventFunction) {
    fabric.Image.fromURL(pathImage, function(oImg){
        oImg.left = position[0];
        oImg.top = position[1];
        oImg.scaleToHeight(size[0]);
        oImg.scaleToWidth(size[1]);
        oImg.selectable = false;
        oImg.hoverCursor= "pointer";

        canvas.add(oImg);

        oImg.on('mouseup', function() {
            eventFunction();
        });
    });    
}



/**
 * Función para inicializar el canvas del transistor
 */
function transistorCanvas() {
    var canvas = new fabric.Canvas('transistor_canvas');
    var imgElement = 'assets/image/btn_1.png';
    var imgElement2 = 'assets/image/btn_2.png'; 
    var imgElement3 = 'assets/image/btn_3.png';
    var imgElement4 = 'assets/image/btn_4.png';
    var imgElement5 = 'assets/image/btn_5.png';
    var imgElement6 = 'assets/image/btn_6.png';
    
    configureCanvas(canvas, fabric, imgElement, [70, 12], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_1").show();
        tarjetasCanvasTriac(1);
    });
    configureCanvas(canvas, fabric, imgElement2, [70, 48], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_2").show();
        tarjetasCanvasTriac(2);
    });
    configureCanvas(canvas, fabric, imgElement3, [70, 83], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_3").show();
        tarjetasCanvasTriac(3);
    });
    configureCanvas(canvas, fabric, imgElement4, [70, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_4").show();
        tarjetasCanvasTriac(4);
    });
    configureCanvas(canvas, fabric, imgElement5, [105, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_5").show();
        tarjetasCanvasTriac(5);
    });
    configureCanvas(canvas, fabric, imgElement6, [140, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_6").show();
        tarjetasCanvasTriac(6);
    });
}

/**
 * Función para configurar comportamiento de imagen de estructura de transistor
 */
function canvasEstructuraTransistor() {
    var canvas = new fabric.Canvas('estructuraTransistor_canvas');
    var imgElement = 'assets/image/btn_1.png';
    var imgElement2 = 'assets/image/btn_2.png'; 
    var imgElement3 = 'assets/image/btn_3.png';

    configureCanvas(canvas, fabric, imgElement, [25, 70], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_1").show();
        transistorCanvasAudio(1);
    });
    configureCanvas(canvas, fabric, imgElement2, [150, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_2").show();
        transistorCanvasAudio(2);
    });
    configureCanvas(canvas, fabric, imgElement3, [255, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_3").show();
        transistorCanvasAudio(3);
    });
}

var intentosJuegoTarjetas = 0;
$('#validarActividad5').off('click').on('click', function(){

    var cantidadElementos = $(".sm_picture.selected").length;

    if(cantidadElementos != 1){
        if(cantidadElementos == 0) {
            Swal.fire(
                '¡Selecciona la onda correcta!',
                '',
                'warning'
            );
        } else {            
            intentosJuegoTarjetas++;
        }
    } else {
        if($(".sm_picture.selected")[0].outerHTML.includes("onda2.png")){
            Swal.fire(
                '¡Has acertado!',
                'Has seleccionado la onda correcta.',
                'success'
            ) 
        } else {
            intentosJuegoTarjetas++;
            Swal.fire(
                '¡Respuesta Invalida!',
                'Selecciona unicamente la onda correcta.',
                'error'
            )  
        }
    }

    if (intentosJuegoTarjetas > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        );
        $(".sm_picture").removeClass("selected");
        intentosJuegoTarjetas = 0;
        goToActivities();
    }
});

/** Validar falso o verdadero */
var intentosJuegoFalsoVerdadero = 0;
$('#validarFalsoVerdadero').off('click').on('click', function(){
    if (arraytruefalse.indexOf(false) != -1) {
        Swal.fire(
            '¡Respuesta Invalida!',
            'Selecciona unicamente lo correcto',
            'error'
        )  
        intentosJuegoFalsoVerdadero++;
    }else{
        Swal.fire(
            '¡Has acertado!',
            'Continua con la siguiente actividad',
            'success'
        )    
    }

    if (intentosJuegoFalsoVerdadero > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosJuegoFalsoVerdadero = 0;
         
    }  
});

/*Validar falso o verdadero 2*/
var intentosJuegoFalsoVerdadero2 = 0;
$('#validarFalsoVerdadero2').off('click').on('click', function(){
    if (arraytruefalse2.indexOf(false) != -1) {
        Swal.fire(
            '¡Respuesta Invalida!',
            'Selecciona unicamente lo correcto',
            'error'
        )  
        intentosJuegoFalsoVerdadero2++;
    }else{
        Swal.fire(
            '¡Has acertado!',
            'Continua con la siguiente actividad',
            'success'
        )    
    }

    if (intentosJuegoFalsoVerdadero2 > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosJuegoFalsoVerdadero2 = 0;
        goToActivities(); 
    }  
});



let intentosJuegoEntradas = 0;
function validarRespuesta() {
    let respuesta1 = "Elementosdeproteccionpersonal";
    let respuesta2 = "Losguantes";
    let respuesta3 = "Gafasprotectoras";

    let entrada1 = document.getElementById("entrada1").value;
    let entrada1_acento = entrada1.replace("ó", "o");
    entrada1_modificada = entrada1_acento.replace(/ /g, ""); 
    
    let entrada2 = document.getElementById("entrada2").value;
    entrada2_modificada = entrada2.replace(/ /g, ""); 

    let entrada3 = document.getElementById("entrada3").value;
    entrada3_modificada = entrada3.replace(/ /g, ""); 
    
    if((String(respuesta1.toLowerCase()) == String(entrada1_modificada.toLowerCase())) 
        && (String(respuesta2.toLowerCase()) == String(entrada2_modificada.toLowerCase()))
        && (String(respuesta3.toLowerCase()) == String(entrada3_modificada.toLowerCase()))){
            
        console.log("iguales");
        Swal.fire(
            '¡Has acertado!',
            'Continua con la siguiente actividad',
            'success'
        ) 
    }
    else{
        Swal.fire(
            '¡Respuesta Invalida!',
            'Ingresa las respuestas correctas',
            'error'
        )  
        intentosJuegoEntradas++;
        console.log("no iguales");
    }

    if (intentosJuegoEntradas > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosJuegoEntradas = 0;
        goToActivities(); 
    }
    
}


/** Cambios botones */ 
$(".caja-texto2").click(function(){
    $(".caja-texto2").removeClass("caja-texto2-amarillo");
    $(this).addClass("caja-texto2-amarillo");
});

$(".button-tab2").click(function(){
    $(".button-tab2").removeClass("button-tab2-activo");
    $(this).addClass("button-tab2-activo");
});

$(".button-tab3").click(function(){
    $(".button-tab3").removeClass("button-tab3-activo");
    $(this).addClass("button-tab3-activo");
});


$(".medio-circulo-der2").click(function(){
    $(".medio-circulo-der2").removeClass("medio-circulo-der2-activo");
    $(".medio-circulo-izq2").removeClass("medio-circulo-izq2-activo");
    $(this).addClass("medio-circulo-der2-activo");
});

$(".medio-circulo-izq2").click(function(){
    $(".medio-circulo-izq2").removeClass("medio-circulo-izq2-activo");
    $(".medio-circulo-der2").removeClass("medio-circulo-der2-activo");
    $(this).addClass("medio-circulo-izq2-activo");
});





const horizontalAccordions = $(".accordion.width");

horizontalAccordions.each((index, element) => {
	const accordion = $(element);
  const collapse = accordion.find(".collapse");
  const bodies = collapse.find("> *");
  accordion.height(accordion.height());  
  bodies.width(bodies.eq(0).width());
  collapse.not(".show").each((index, element) => {
  	$(element).parent().find("[data-toggle='collapse']").addClass("collapsed");
  });
});
