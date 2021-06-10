var numSlide = 22

$(document).ready(function () {
    
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
        effect: 'slideleft',
        defaultTab: 1
    });
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content: '<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems / numSlide) * 100).toFixed(2);
        $("#percent_curso").percircle({ percent: porcent, animate: "true" });
    })

    $('#icon_actividades').off('click').on('click', function () {
        if ($(".divcontenido").is(':visible')) {
            $(".divcontenido").animate({ width: 'hide' });
            $(".menu-actividades").show(1000);
            setTimeout(function () { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        } else {
            $(".menu-actividades").hide();
            setTimeout(function () { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });

    $('.link_actividad').off('click').on('click', function () {
        $(".menu-actividades").hide();
        setTimeout(function () { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at = $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
                break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 7);
                $('#smartwizard2').smartWizard("goToStep", 7);
                break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 12);
                $('#smartwizard2').smartWizard("goToStep", 12);
                break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 15);
                $('#smartwizard2').smartWizard("goToStep", 15);
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });  

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });     

    $('#smartwizard').smartWizard({
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
            case 7:
            case 12:
            case 15:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });

    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {

            case 4:
            case 5:
            case 6:
            case 7:
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad1`).addClass("active_actividad");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad2`).addClass("active_actividad");
                break;
            case 12:
            case 13:                
            case 14:
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad3`).addClass("active_actividad");
                break; 
            case 15:                               
            case 16:
            case 17:
            case 18:                
            case 19:                
            case 20:                
            case 21:  
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad4`).addClass("active_actividad");
                break;                      
            case 22:
                
            default:
                break;
        }
    });

    customUnitReady();
});

  
/**
 * Se inician las funciones particulares de cada unidad
 */
function customUnitReady() {
    transistorCanvas();
    canvasEstructuraTransistor();

    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
            
        }
    })

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            console.log(index);
            var flatIndex = $("#flat>ul>.flipster__item--current").attr("data-flip-title");
            $("#flat>ul>.flipster__item--current").addClass("remover");
            flatIndexAudio(flatIndex);
        }
    });
}

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

function cerrarProcesos() { //btn-close
    document.getElementById('procesos').style.display = "block";
    document.getElementById('procesos1').style.display = "none";
    document.getElementById('procesos2').style.display = "none";
    document.getElementById('procesos3').style.display = "none";
    document.getElementById('procesos4').style.display = "none";
    document.getElementById('procesos5').style.display = "none";
}

function showDiv() {
    document.getElementById('unidad_necesitas').style.display = "none";
    document.getElementById('unidad_aprenderas').style.display = "block";
    document.getElementById('ampliar_info').style.display = "none";
}

function showDiv2() {
    document.getElementById('unidad_aprenderas').style.display = "none";
    document.getElementById('unidad_necesitas').style.display = "block";
    document.getElementById('ampliar_info').style.display = "none";
}

function showDiv3() {
    document.getElementById('caja1-frente').style.display = "none";
    document.getElementById('caja1-atras').style.display = "block";
    document.getElementById('caja2-frente').style.display = "block";
    document.getElementById('caja2-atras').style.display = "none";
}

function showDiv4() {
    document.getElementById('caja1-frente').style.display = "block";
    document.getElementById('caja1-atras').style.display = "none";
}

function showDiv5() {
    document.getElementById('caja2-frente').style.display = "none";
    document.getElementById('caja2-atras').style.display = "block";
    document.getElementById('caja1-atras').style.display = "none";
    document.getElementById('caja1-frente').style.display = "block";
}

function showDiv6() {
    document.getElementById('caja2-frente').style.display = "block";
    document.getElementById('caja2-atras').style.display = "none";
}

function showDiv7() {
    document.getElementById('caja3-frente').style.display = "none";
    document.getElementById('caja3-atras').style.display = "block";
    document.getElementById('caja4-frente').style.display = "block";
    document.getElementById('caja4-atras').style.display = "none";
}

function showDiv8() {
    document.getElementById('caja3-frente').style.display = "block";
    document.getElementById('caja3-atras').style.display = "none";
}

function showDiv9() {
    document.getElementById('caja4-frente').style.display = "none";
    document.getElementById('caja4-atras').style.display = "block";
    document.getElementById('caja3-atras').style.display = "none";
    document.getElementById('caja3-frente').style.display = "block";
}

function showDiv10() {
    document.getElementById('caja4-frente').style.display = "block";
    document.getElementById('caja4-atras').style.display = "none";
}

function showDiv11() {
    document.getElementById('caja5-frente').style.display = "none";
    document.getElementById('caja5-atras').style.display = "block";
    document.getElementById('caja6-frente').style.display = "block";
    document.getElementById('caja6-atras').style.display = "none";
}

function showDiv12() {
    document.getElementById('caja5-frente').style.display = "block";
    document.getElementById('caja5-atras').style.display = "none";
}

function showDiv13() {
    document.getElementById('caja6-frente').style.display = "none";
    document.getElementById('caja6-atras').style.display = "block";
    document.getElementById('caja5-atras').style.display = "none";
    document.getElementById('caja5-frente').style.display = "block";
}

function showDiv14() {
    document.getElementById('caja6-frente').style.display = "block";
    document.getElementById('caja6-atras').style.display = "none";
}

function showDiv15() {
    document.getElementById('caja1-atras').style.display = "none";
    document.getElementById('caja2-atras').style.display = "none";
    document.getElementById('caja3-atras').style.display = "none";
    document.getElementById('caja4-atras').style.display = "none";
    document.getElementById('caja5-atras').style.display = "none";
    document.getElementById('caja6-atras').style.display = "none";
    document.getElementById('caja1-frente').style.display = "block";
    document.getElementById('caja2-frente').style.display = "block";
    document.getElementById('caja3-frente').style.display = "block";
    document.getElementById('caja4-frente').style.display = "block";
    document.getElementById('caja5-frente').style.display = "block";
    document.getElementById('caja6-frente').style.display = "block";
}

function showDiv16() {
    document.getElementById('procesos').style.display = "none";
    document.getElementById('procesos1').style.display = "block";
}
function showDiv17() {
    document.getElementById('procesos').style.display = "none";
    document.getElementById('procesos2').style.display = "block";
}
function showDiv18() {
    document.getElementById('procesos').style.display = "none";
    document.getElementById('procesos3').style.display = "block";
}
function showDiv19() {
    document.getElementById('procesos').style.display = "none";
    document.getElementById('procesos4').style.display = "block";
}
function showDiv20() {
    document.getElementById('procesos').style.display = "none";
    document.getElementById('procesos5').style.display = "block";
}

function showDiv21() {
    document.getElementById('suelos').style.display = "none";
    document.getElementById('suelos_duros').style.display = "block";
    document.getElementById('suelos_blandos').style.display = "none";
    document.getElementById('suelos_textiles').style.display = "none";
}
function showDiv22() {
    document.getElementById('suelos').style.display = "none";
    document.getElementById('suelos_duros').style.display = "none";
    document.getElementById('suelos_blandos').style.display = "block";
    document.getElementById('suelos_textiles').style.display = "none";
}
function showDiv23() {
    document.getElementById('suelos').style.display = "none";
    document.getElementById('suelos_duros').style.display = "none";
    document.getElementById('suelos_blandos').style.display = "none";
    document.getElementById('suelos_textiles').style.display = "block";
}

function showDiv24() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "block";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv25() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "block";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv26() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "block";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv27() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "block";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv28() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "block";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv29() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "block";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv30() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "block";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv31() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "block";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv32() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "block";
    document.getElementById('tecnicas10').style.display = "none";
}

function showDiv33() {
    document.getElementById('tecnicas').style.display = "none";
    document.getElementById('tecnicas1').style.display = "none";
    document.getElementById('tecnicas2').style.display = "none";
    document.getElementById('tecnicas3').style.display = "none";
    document.getElementById('tecnicas4').style.display = "none";
    document.getElementById('tecnicas5').style.display = "none";
    document.getElementById('tecnicas6').style.display = "none";
    document.getElementById('tecnicas7').style.display = "none";
    document.getElementById('tecnicas8').style.display = "none";
    document.getElementById('tecnicas9').style.display = "none";
    document.getElementById('tecnicas10').style.display = "block";
}

function showDiv34() { 
    document.getElementById('lavado').style.display = "none";
    document.getElementById('lavado1').style.display = "block";
    document.getElementById('lavado2').style.display = "none";
    document.getElementById('lavado3').style.display = "none";
    document.getElementById('lavado4').style.display = "none";
    document.getElementById('lavado5').style.display = "none";
}

function showDiv35() { 
    document.getElementById('lavado').style.display = "none";
    document.getElementById('lavado1').style.display = "none";
    document.getElementById('lavado2').style.display = "block";
    document.getElementById('lavado3').style.display = "none";
    document.getElementById('lavado4').style.display = "none";
    document.getElementById('lavado5').style.display = "none";
}

function showDiv36() { 
    document.getElementById('lavado').style.display = "none";
    document.getElementById('lavado1').style.display = "none";
    document.getElementById('lavado2').style.display = "none";
    document.getElementById('lavado3').style.display = "block";
    document.getElementById('lavado4').style.display = "none";
    document.getElementById('lavado5').style.display = "none";
}

function showDiv37() { 
    document.getElementById('lavado').style.display = "none";
    document.getElementById('lavado1').style.display = "none";
    document.getElementById('lavado2').style.display = "none";
    document.getElementById('lavado3').style.display = "none";
    document.getElementById('lavado4').style.display = "block";
    document.getElementById('lavado5').style.display = "none";
}

function showDiv38() { 
    document.getElementById('lavado').style.display = "none";
    document.getElementById('lavado1').style.display = "none";
    document.getElementById('lavado2').style.display = "none";
    document.getElementById('lavado3').style.display = "none";
    document.getElementById('lavado4').style.display = "none";
    document.getElementById('lavado5').style.display = "block";
}

function cerrarLavado() { 
    document.getElementById('lavado').style.display = "block";
    document.getElementById('lavado1').style.display = "none";
    document.getElementById('lavado2').style.display = "none";
    document.getElementById('lavado3').style.display = "none";
    document.getElementById('lavado4').style.display = "none";
    document.getElementById('lavado5').style.display = "none";
}

function showDiv39() {
    document.getElementById('caja-desinfeccion-frente').style.display = "none"; 
    document.getElementById('caja-desinfeccion-atras').style.display = "block"; 
}

function showDiv40() {
    document.getElementById('caja-esterilizacion-frente').style.display = "none"; 
    document.getElementById('caja-esterilizacion-atras').style.display = "block"; 
}

function showDiv41() {
    document.getElementById('caja-diferencias-frente').style.display = "none"; 
    document.getElementById('caja-diferencias-atras').style.display = "block"; 
}

function showDiv42() {
    document.getElementById('caja-genericos-frente').style.display = "none"; 
    document.getElementById('caja-genericos-atras').style.display = "block"; 
}

function showDiv43() {
    document.getElementById('caja-diferencias-frente').style.display = "block"; 
    document.getElementById('caja-diferencias-atras').style.display = "none";
}

function showDiv44() {
    document.getElementById('caja-genericos-frente').style.display = "block"; 
    document.getElementById('caja-genericos-atras').style.display = "none"; 
}

function showDiv45() {
    document.getElementById('caja-desinfeccion-frente').style.display = "block"; 
    document.getElementById('caja-desinfeccion-atras').style.display = "none";
}

function showDiv46() {
    document.getElementById('caja-esterilizacion-frente').style.display = "block"; 
    document.getElementById('caja-esterilizacion-atras').style.display = "none"; 
}

function showNaOCl() {
    document.getElementById('NaOCl').style.display = "block";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}

function showNaDCC() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "block";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showCloraminas() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "block";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showClO2() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "block";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showCH2O() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "block";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showGlutaraldehído() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "block";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showFenolicos() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "block";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showAmonio() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "block";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showAlcoholes() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "block";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "none";
}
function showYodo() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "block";
    document.getElementById('Peroxido').style.display = "none";
}
function showPeroxido() {
    document.getElementById('NaOCl').style.display = "none";
    document.getElementById('NaDCC').style.display = "none";
    document.getElementById('Cloraminas').style.display = "none";
    document.getElementById('ClO2').style.display = "none";
    document.getElementById('CH2O').style.display = "none";
    document.getElementById('Glutaraldehído').style.display = "none";
    document.getElementById('Fenolicos').style.display = "none";
    document.getElementById('Amonio').style.display = "none";
    document.getElementById('Alcoholes').style.display = "none";
    document.getElementById('Yodo').style.display = "none";
    document.getElementById('Peroxido').style.display = "block";
}

function muestraAtras1() {
    document.getElementById('atras1').style.display = "block";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "none";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras2() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "block";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "none";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras3() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "block";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "none";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras4() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "block";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "none";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras5() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "block";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "none";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras6() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "block";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "none";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras7() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "block";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "none";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras8() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "block";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "none";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras9() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "block";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "none";
    document.getElementById('frente10').style.display = "block";
}

function muestraAtras10() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "block";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "none";
}

function muestraFrente() {
    document.getElementById('atras1').style.display = "none";
    document.getElementById('atras2').style.display = "none";
    document.getElementById('atras3').style.display = "none";
    document.getElementById('atras4').style.display = "none";
    document.getElementById('atras5').style.display = "none";
    document.getElementById('atras6').style.display = "none";
    document.getElementById('atras7').style.display = "none";
    document.getElementById('atras8').style.display = "none";
    document.getElementById('atras9').style.display = "none";
    document.getElementById('atras10').style.display = "none";
    document.getElementById('frente1').style.display = "block";
    document.getElementById('frente2').style.display = "block";
    document.getElementById('frente3').style.display = "block";
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente6').style.display = "block";
    document.getElementById('frente7').style.display = "block";
    document.getElementById('frente8').style.display = "block";
    document.getElementById('frente9').style.display = "block";
    document.getElementById('frente10').style.display = "block";
}




/*

function showDiv25() { //btn-close
    document.getElementById('medidas1').style.display = "block";
    document.getElementById('medidas2').style.display = "none";
    document.getElementById('medidas3').style.display = "none";
    document.getElementById('medidas4').style.display = "none";
    document.getElementById('medidas5').style.display = "none";
    document.getElementById('medidas6').style.display = "none";
    document.getElementById('medidas7').style.display = "none";
    document.getElementById('medidas8').style.display = "none";
    document.getElementById('medidas9').style.display = "none";
    document.getElementById('medidas10').style.display = "none";
    document.getElementById('medidas11').style.display = "none";
    document.getElementById('medidas12').style.display = "none";
    document.getElementById('medidas13').style.display = "none";
}

function showDiv26() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas2').style.display = "block";
}

function showDiv27() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas3').style.display = "block";
}

function showDiv28() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas4').style.display = "block";
}

function showDiv29() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas5').style.display = "block";
}

function showDiv30() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas6').style.display = "block";
}

function showDiv31() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas7').style.display = "block";
}

function showDiv32() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas8').style.display = "block";
}

function showDiv33() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas9').style.display = "block";
}

function showDiv34() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas10').style.display = "block";
}

function showDiv35() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas11').style.display = "block";
}

function showDiv36() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas12').style.display = "block";
}

function showDiv37() {
    document.getElementById('medidas1').style.display = "none";
    document.getElementById('medidas13').style.display = "block";
}*/



// tabs
$(".tablinks").click(function(){


    //$('#ampliar_info').hide('fast');//
    //$('#ampliar_info2').hide('fast');//

    var idTabs = $(this).parent().parent().parent().attr("id");        

    $(`#${idTabs}>div>.tabs>button`).removeClass("active");
    $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");

    $(this).addClass("active");
    $(`#${$(this).attr("data-country")}`).addClass("active");

    audioTabs($(this).attr("data-country"));
});

function goToActivities() {
    pause_audio();
    $(".divcontenido").animate({ width: 'hide' }); 
    $(".menu-actividades").show(1000); 
    setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
    $(".controls-slide").hide();
}

$('.sistema_medicion').off('click').on('click', function(){
    var numt= $(this).text();
    $('.div_sistema_medicion').hide();
    $('.div_sistema_medicion'+numt).show().css( {'opacity': 0, 'bottom': '-100px' } )
                .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    audioPantalla25(numt);
});

let li_items = document.querySelectorAll(".accordion_wrap ul li");
let ul_items = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
    item.addEventListener("click", function(){
        li_items.forEach(function(item){
            item.classList.remove("active");
        })

        item.classList.add("active");
    })
});

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).ready(function(){
    $('.zoom2').hover(function() {
        $(this).addClass('transition2');
    }, function() {
        $(this).removeClass('transition2');
    });
});



$(".choice").on("click", function(){
    console.log("test");
    $(".choice").removeClass("expand unset ");
    $(".choice").addClass("small");
    $(this).removeClass("small");
    $(this).addClass("expand");
}
)