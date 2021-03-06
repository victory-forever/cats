
$(document).ready(function(){


// Переключение карточек

	$(".product__card_fuagra, .buyfuagra").click(function() {
	    $("#fuagra").trigger('click');
	}); 	 

	$(".product__card_fish, .buyfish").click(function() {
	    $("#fish").trigger('click');
	}); 

	$(".product__card_chicken, .buychicken").click(function() {
	    $("#chicken").trigger('click');
	}); 


// Текст под карточкой с фуа-гра

	if ($('#fuagra').is(':checked')){
        $('.product__message-container_fuagra .product__message_selected').show();
        $('.product__message-container_fuagra .product__message_default').hide();
		$('.product__message-container_fuagra .product__message_disabled').hide();
    } else if ($('#fuagra').is(':disabled')) {
	    $('.product__message-container_fuagra .product__message_disabled').show();
        $('.product__message-container_fuagra .product__message_default').hide();
		$('.product__message-container_fuagra .product__message_selected').hide();
	} else {
        $('.product__message-container_fuagra .product__message_default').show();
		$('.product__message-container_fuagra .product__message_selected').hide();
		$('.product__message-container_fuagra .product__message_disabled').hide();
    }

	$('#fuagra, .buyfuagra').click(function(){
	    if ($('#fuagra').is(':checked')){
	        $('.product__message-container_fuagra .product__message_selected').show();
	        $('.product__message-container_fuagra .product__message_default').hide();
			$('.product__message-container_fuagra .product__message_disabled').hide();
	    } else if ($('#fuagra').is(':disabled')) {
		    $('.product__message-container_fuagra .product__message_disabled').show();
	        $('.product__message-container_fuagra .product__message_default').hide();
			$('.product__message-container_fuagra .product__message_selected').hide();
		}
	     else {
	        $('.product__message-container_fuagra .product__message_default').show();
			$('.product__message-container_fuagra .product__message_selected').hide();
			$('.product__message-container_fuagra .product__message_disabled').hide();
	    }
	});


// Текст под карточкой с рыбой


	if ($('#fish').is(':checked')){
        $('.product__message-container_fish .product__message_selected').show();
        $('.product__message-container_fish .product__message_default').hide();
		$('.product__message-container_fish .product__message_disabled').hide();
    } else if ($('#fish').is(':disabled')) {
	    $('.product__message-container_fish .product__message_disabled').show();
        $('.product__message-container_fish .product__message_default').hide();
		$('.product__message-container_fish .product__message_selected').hide();
	} else {
        $('.product__message-container_fish .product__message_default').show();
		$('.product__message-container_fish .product__message_selected').hide();
		$('.product__message-container_fish .product__message_disabled').hide();
    }

	$('#fish, .buyfish').click(function(){
	    if ($('#fish').is(':checked')){
	        $('.product__message-container_fish .product__message_selected').show();
	        $('.product__message-container_fish .product__message_default').hide();
			$('.product__message-container_fish .product__message_disabled').hide();
	    } else if ($('#fish').is(':disabled')) {
	        $('.product__message-container_fish .product__message_disabled').show();
	        $('.product__message-container_fish .product__message_default').hide();
			$('.product__message-container_fish .product__message_selected').hide();
	    } else {
	        $('.product__message-container_fish .product__message_default').show();
			$('.product__message-container_fish .product__message_selected').hide();
			$('.product__message-container_fish .product__message_disabled').hide();
	    }
	});


// Текст под карточкой с курой


	if ($('#chicken').is(':checked')){
        $('.product__message-container_chicken .product__message_selected').show();
        $('.product__message-container_chicken .product__message_default').hide();		
		$('.product__message-container_chicken .product__message_disabled').hide();
    } else if ($('#chicken').is(':disabled')) {
        $('.product__message-container_chicken .product__message_disabled').show();
        $('.product__message-container_chicken .product__message_default').hide();
		$('.product__message-container_chicken .product__message_selected').hide();
    } else {
        $('.product__message-container_chicken .product__message_default').show();
		$('.product__message-container_chicken .product__message_selected').hide();
		$('.product__message-container_chicken .product__message_disabled').hide();
    }

	$('#chicken, .buychicken').click(function(){
	    if ($('#chicken').is(':checked')){
	        $('.product__message-container_chicken .product__message_selected').show();
	        $('.product__message-container_chicken .product__message_default').hide();		
			$('.product__message-container_chicken .product__message_disabled').hide();
	    } else if ($('#chicken').is(':disabled')) {
	        $('.product__message-container_chicken .product__message_disabled').show();
	        $('.product__message-container_chicken .product__message_default').hide();
			$('.product__message-container_chicken .product__message_selected').hide();
	    } else {
	        $('.product__message-container_chicken .product__message_default').show();
			$('.product__message-container_chicken .product__message_selected').hide();
			$('.product__message-container_chicken .product__message_disabled').hide();
	    }
	});


// Наведение на отмеченную карточку


	$( ".product__checkbox" ).change(function() {
		$('.product__card:hover .product__description_default').show();
		$('.product__card:hover .product__description_selected-hover').hide();
	});

	$( ".product__card_fuagra" ).hover(
		function() {
			if ($('#fuagra').is(':checked')){
				$('.product__card_fuagra .product__description_default').hide();
				$('.product__card_fuagra .product__description_selected-hover').show();
			}	
		}, function() {
			if ($('#fuagra').is(':checked')){
			    $('.product__card_fuagra .product__description_default').show();
				$('.product__card_fuagra .product__description_selected-hover').hide(); 
			}
		}
	);

	$( ".product__card_fish" ).hover(
		function() {
			if ($('#fish').is(':checked')){
				$('.product__card_fish .product__description_default').hide();
				$('.product__card_fish .product__description_selected-hover').show();
			}	
		}, function() {
			if ($('#fish').is(':checked')){
			    $('.product__card_fish .product__description_default').show();
				$('.product__card_fish .product__description_selected-hover').hide(); 
			}
		}
	);

	$( ".product__card_chicken" ).hover(
		function() {
			if ($('#chicken').is(':checked')){
				$('.product__card_chicken .product__description_default').hide();
				$('.product__card_chicken .product__description_selected-hover').show();
			}	
		}, function() {
			if ($('#chicken').is(':checked')){
			    $('.product__card_chicken .product__description_default').show();
				$('.product__card_chicken .product__description_selected-hover').hide(); 
			}
		}
	);





});


    
    
   
   


