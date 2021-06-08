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
            $("#carouselExampleIndicators5").carousel(0);
            audioLocation = 'assets/audios/sonido1_p1.mp3';
            break;    
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");

            audioLocation = 'assets/audios/Sonido3_p2.mp3';
            break;
        case 3:
            $(`#unidad_aprenderas>div>.tabs>button`).removeClass("active");
            $(`#unidad_aprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");

            break;
        case 4:
            $("#carouselActividadAprendizaje1").carousel(0);
            audioLocation = 'assets/audios/Sonido8_p4.mp3';
            break;
        case 5:
            audioLocation = 'assets/audios/Sonido12_p5.mp3';
            break;
        case 6:
            audioLocation = '';
            break;
        case 7:
            $("#carouselActividadAprendizaje2").carousel(0);
            audioLocation = 'assets/audios/Sonido14_p7.mp3';
            break;
        case 8:
            audioLocation = 'assets/audios/Sonido17_p8.mp3';
            break;
        case 9:
            audioLocation = '';
            break;
        case 10:
            audioLocation = 'assets/audios/Sonido19_ p10.mp3';
            break;
        case 11:
            audioLocation = '';
            break;
        case 12:
            $("#carouselActividadAprendizaje3").carousel(0);
            audioLocation = 'assets/audios/Sonido20_ p11.mp3';
            break;
        case 13:
            audioLocation = 'assets/audios/Sonido23_ p12.mp3';
            break;
        case 14:
            audioLocation = '';
            break;
        case 15:
            $("#carouselActividadAprendizaje4").carousel(0);
            audioLocation = 'assets/audios/Sonido24_ p13.mp3';
            break;
        case 16:
            $("#carouselBuenasPracticas").carousel(0);
            audioLocation = 'assets/audios/Sonido27_ p14.mp3';
            break;
        case 17:
            audioLocation = 'assets/audios/Sonido29_ p15.mp3';
            break;
        case 18:
            audioLocation = 'assets/audios/Sonido30_p16.mp3';
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
            audioLocation = 'assets/audios/Sonido3_p2.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/audios/Sonido4_p2.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/audios/Sonido5_p2mp3.mp3 ';
            break;
        case 'unidad_aprenderas':
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
            audioLocation = 'assets/audios/Sonido8_p4.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio1.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio2.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
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
            audioLocation = 'assets/audios/Sonido14_p7.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio3.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio4.mp3';
            break;
        case 3:
            audioLocation = 'assets/audios/Audio.mp3';
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
            audioLocation = 'assets/audios/Sonido20_ p11.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio5.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio6.mp3';
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
            audioLocation = 'assets/audios/Sonido24_ p13.mp3';
            break;
        case 1:
            audioLocation = 'assets/audios/Audio7.mp3';
            break;
        case 2:
            audioLocation = 'assets/audios/Audio8.mp3';
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






