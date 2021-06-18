var audioActivo = true;
var audioActual;

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
/*$(document).ready(iniciar);
function iniciar(){
    $("#slip2").on("mouseover", wrapAudio(1));
}*/
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function controlAudioSlides(numeroSlide) {
    
    var audioLocation;

    switch (numeroSlide) {
        case 1:
            audioLocation = 'assets/audios/sonido1_p1.mp3';
            break;    
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");

            audioLocation = 'assets/audios/Sonido2_p1.mp3';
            break;
        case 3:
            $(`#unidad_aprenderas>div>.tabs>button`).removeClass("active");
            $(`#unidad_aprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");

            break;
        case 4:
            $("#carouselActividadAprendizaje1").carousel(0);
            audioLocation = 'assets/audios/Sonido6_p4.mp3';
            break;
        case 5:
            audioLocation = 'assets/audios/Audio81.mp3';
            break;
        case 6:
            audioLocation = 'assets/audios/Sonido16_p5.mp3';
            break;
        case 7:
            audioLocation = 'assets/audios/Audio9.mp3';
            break;
        case 8:
            audioLocation = '';
            break;
        case 9:
            $("#carouselVidrio").carousel(0);
            audioLocation = 'assets/audios/Sonido19_p7.mp3';
            break;
        case 10:
            audioLocation = 'assets/audios/Audio10.mp3';
            break;
        case 11:
            audioLocation = 'assets/audios/Sonido24_p8.mp3';
            break;
        case 12:
            audioLocation = 'assets/audios/Audio11.mp3';
            break;
        case 13:
            audioLocation = '';
            break;
        case 14:
            audioLocation = 'assets/audios/Audio12.mp3';
            break;
        case 15:
            audioLocation = 'assets/audios/Audio131.mp3';
            break;
        case 16:
            audioLocation = '';
            break;
        case 17:
            audioLocation = 'assets/audios/Audio14.mp3';
            break;
        case 18:
            $("#carouselCamaraSeguridad").carousel(0);
            audioLocation = 'assets/audios/Sonido39_p12.mp3';
            break;
        case 19:
            audioLocation = 'assets/audios/Audio15.mp3';
            break;
        case 20:
            audioLocation = 'assets/audios/Sonido44_p14.mp3';
            break;
        case 21:
            audioLocation = 'assets/audios/Sonido45_p14.mp3';
            break;
        case 22:
            audioLocation = 'assets/audios/Audio16.mp3';
            break;
        case 23:
            audioLocation = 'assets/audios/Audio17.mp3';
            break;
        case 24:
            audioLocation = '';
            break;
        case 25:
            $("#carouselActividadAprendizaje2").carousel(0);
            audioLocation = 'assets/audios/Sonido56_p17.mp3';
            break;
        case 26:
            $("#carouselBalanzas").carousel(0);
            audioLocation = 'assets/audios/Audio18.mp3';
            break;
        case 27:
            audioLocation = '';
            break;
        case 28:
            audioLocation = 'assets/audios/Audio19.mp3';
            break;
        case 29:
            audioLocation = '';
            break;
        case 30:
            audioLocation = 'assets/audios/Audio20.mp3';
            break;
        case 31:
            audioLocation = '';
            break;
        case 32:
            audioLocation = '';
            break;
        case 33:
            audioLocation = 'assets/audios/Sonido73_p22.mp3';
            break;
        case 34:
            audioLocation = '';
            break;
        case 35:
            audioLocation = 'assets/audios/Sonido74_p22.mp3';
            break;
        case 36:
            audioLocation = 'assets/audios/Audio22.mp3';
            break;
        case 37:
            $("#carouselPotenciometro").carousel(0);
            audioLocation = '';
            break;
        case 38:
            audioLocation = 'assets/audios/Audio23.mp3';
            break;
        case 39:
            audioLocation = 'assets/audios/Sonido85_p27.mp3';
            break;
        case 40:
            audioLocation = '';
            break;
        case 41:
            audioLocation = 'assets/audios/Audio24.mp3';
            break;
        case 42:
            audioLocation = '';
            break;
        case 43:
            audioLocation = 'assets/audios/Audio25.mp3';
            break;
        case 44:
            audioLocation = 'assets/audios/Audio26.mp3';
            break;
        case 45:
            audioLocation = 'assets/audios/Audio27.mp3';
            break;
        case 46:
            audioLocation = '';
            break;
        case 47:
            audioLocation = 'assets/audios/Sonido96_p30.mp3';
            break;
        case 48:
            audioLocation = 'assets/audios/Audio28.mp3';
            break;
        case 49:
            audioLocation = '';
            break;
        case 50:
            $("#carouselActividadAprendizaje3").carousel(0);
            audioLocation = 'assets/audios/Sonido100_p31.mp3';
            break;
        case 51:
            audioLocation = 'assets/audios/Sonido107_p32.mp3';
            break;
        case 52:
            audioLocation = '';
            break;
        case 53:
            audioLocation = 'assets/audios/Audio29.mp3';
            break;
        case 54:
            audioLocation = 'assets/audios/Sonido112_p34.mp3';
            break;
        case 55:
            audioLocation = 'assets/audios/Sonido113_p34.mp3';
            break;
        case 56:
            audioLocation = 'assets/audios/Audio30.mp3';
            break;
        case 57:
            audioLocation = 'assets/audios/Sonido116_p36.mp3';
            break;
        case 58:
            audioLocation = '';
            break;
        case 59:
            $("#carouselActividadAprendizaje4").carousel(0);
            audioLocation = 'assets/audios/Sonido117_p37.mp3';
            break;
        case 60:
            audioLocation = 'assets/audios/Sonido124_p38.mp3';
            break;
        case 61:
            audioLocation = 'assets/audios/Sonido125_p38.mp3';
            break;
        case 62:
            audioLocation = 'assets/audios/Sonido126_p39.mp3';
            break;
        case 63:
            audioLocation = '';
            break;
        case 64:
            audioLocation = 'assets/audios/Audio32.mp3';
            break;
        case 65:
            audioLocation = '';
            break;
        case 66:
            audioLocation = '';
            break;
        case 67:
            audioLocation = '';
            break;
        case 68:
            audioLocation = 'assets/audios/Sonido129_p41.mp3';
            break;
        case 69:
            audioLocation = 'assets/audios/Sonido130_p42.mp3';
            break;
        case 70:
            audioLocation = '';
            break;

            
        default:
            audioLocation = undefined;
            break;
    }
    
    reproducirAudio(audioLocation);
}



$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

function pause_audio() {
    if(audioActual)
        audioActual.pause();
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

$('.modal').on('hidden.bs.modal', function (e) {
    if (audioActual)
        audioActual.pause();    
});


/** Audios tabs */
function audioTabs(opcion) {
    var audioLocation;
    //var caso = $(this).attr("data-country");

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/audios/Sonido2_p1.mp3';
            break;
        case 'Contenido':
            $("#carouselContenidoTematico").carousel(0);
            audioLocation = 'assets/audios/Sonido3_p2.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/audios/Sonido5_p3.mp3 ';
            break;
        /*case 'unidad_aprenderas':
            audioLocation = 'assets/audios/Sonido6_p3mp3.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/audios/Sonido7_p3mp3.mp3';
            break;
        /*case 'estructuraTransistor_1':
            audioLocation = 'assets/voz/U004P004012.mp3';
            break;*/
        default:
            break;
    }

    reproducirAudio(audioLocation);
}


/** Nuevos */
$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/sonido1_p1.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido2_p1mp3.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido6_p4.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio1.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio21.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselPotenciometro').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselPotenciometro>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = '';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido78_p24.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Sonido79_p25.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Sonido80_p26.mp3';
            break;
        case 4:
            audioLocation = 'assets/audios/Sonido81_p26.mp3';
            break;
        case 5:
            audioLocation = 'assets/audios/Sonido82_p26.mp3';
            break;
        case 6:
            audioLocation = '';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselCamaraSeguridad').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselCamaraSeguridad>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido39_p12.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido40_p12.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselVidrio').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselVidrio>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido19_p7.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido20_p7.mp3';
            break;
        case 2:
            audioLocation = '';
            break;
        case 3:
            audioLocation = 'assets/audios/Sonido21_p7.mp3';
            break;
        case 4:
            audioLocation = '';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido56_p17.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio31.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio41.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselBalanzas').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselBalanzas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido64_p19.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido65_p19.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Sonido66_19.mp3';
            break;
       
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselContenidoTematico').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselContenidoTematico>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido3_p2.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido4_p2.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido100_p31.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio52.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio61.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido117_p37.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio71.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio812.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselBuenasPracticas').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselBuenasPracticas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/audios/Sonido27_ p14.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Sonido28_ p14.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

function audioCalibracion(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/audios/Sonido110_p33.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Sonido111_p33.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioVerificacion(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/audios/Sonido111_p33.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}




