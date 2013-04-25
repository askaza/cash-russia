$(document).ready(function() {
    $('#slider').slides({
	generateNextPrev: false,
	effect:'fade',
	generatePagination:true
    });


    var s =  $( "#range-money-sl" ).slider({
	value:1000,
	min: 1000,
	max: 15000,
	step: 500,
	range: "min",
	change: function( event, ui ) {
	    $( "#money" ).val( $( "#range-money-sl" ).slider( "value" ) );
	}
    });

    $( "#money" ).keyup( function() {
	$("#range-money-sl").slider( 'value', $( "#money" ).val() );

    } );
    $('.range_money .range-buttons_up').click(function() {
	s.slider('value', s.slider('value') + s.slider( "option", "step" ) );

    });
    $('.range_money .range-buttons_down').click(function() {
	s.slider('value', s.slider('value') - s.slider( "option", "step" ) );

    });


 var d =  $( "#range-days-sl" ).slider({
	value:2,
	min: 2,
	max: 30,
	step: 1,
	range: "min",
	change: function( event, ui ) {
	    $( "#days" ).val( $( "#range-days-sl" ).slider( "value" ) );
	}
    });

    $( "#days" ).keyup( function() {
	$("#range-days-sl").slider( 'value', $( "#days" ).val() );

    } );
    $('.range_days .range-buttons_up').click(function() {
	d.slider('value', d.slider('value') + d.slider( "option", "step" ) );

    });
    $('.range_days .range-buttons_down').click(function() {
	d.slider('value', d.slider('value') - d.slider( "option", "step" ) );

    });


    var p = $('#payment-type-sl').slider({
	value:1,
	min:1,
	max:2,
	step:1,
	change: function( event, ui ) {
	    if(p.slider('value') == 2){
		$('.payment-type-kiwi').removeClass('active');
		$('.payment-type-card').addClass('active');
	    }
	    else {
		$('.payment-type-kiwi').addClass('active');
		$('.payment-type-card').removeClass('active');
	    }
	}
    });


});