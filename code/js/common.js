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
	create: function( event, ui ) {
             $('.range_money .ui-slider-handle').html('<span class="range-label">'+ 1000 + '</span>');
        },
	change: function( event, ui ) {
	    $( "#money" ).val( $( "#range-money-sl" ).slider( "value" ) );
	    $('.range_money .ui-slider-handle').html('<span class="range-label">'+ $( "#range-money-sl" ).slider( "value" ) + '</span>');
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
	create: function( event, ui ) {
             $('.range_days .ui-slider-handle').html('<span class="range-label">'+ 2 + '</span>');
        },
	change: function( event, ui ) {
	    $( "#days" ).val( $( "#range-days-sl" ).slider( "value" ) );
	    $('.range_days .ui-slider-handle').html('<span class="range-label">'+ $( "#range-days-sl" ).slider( "value" ) + '</span>');
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


});