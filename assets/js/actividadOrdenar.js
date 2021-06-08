var intentosJuego = 0;
$(document).ready(function () {
	$(".actividadOrdenamiento").sortable();
	
	var cards = $(".cards-asc");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}

	var cards = $(".cards-asc2");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}
	$('#validarActividadOrdenamiento').off('click').on('click', function(){
        intentosJuego++;
        if (intentosJuego >= 2) {
            Swal.fire(
                    '¡Has superado el número de intentos!',
                    'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
                    'warning'
                )
            goToActivities();
        } else {
            var ordenArray = new Array();
            $(".cards-asc").each(function(){
                
                ordenArray.push($(this).data("xc"));
            });
            console.log(isAscending(ordenArray));
            if (isAscending(ordenArray)) {
                Swal.fire(
                            '¡Buen trabajo!',
                            'Has acertado',
                            'success'
                        )
            } else {
                Swal.fire(
                    '¡Lo siento!',
                    'Puedes intentarlo de nuevo',
                    'error'
                )  
            }
        }
	});

    var isAscending = a => a.slice(1)
                        .map((e,i) => e > a[i])
                        .every(x => x);
});