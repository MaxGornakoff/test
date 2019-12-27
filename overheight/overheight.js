/*************** overheight ****************/	

function content_overheight(elem){
	

	if($(elem).hasClass('is_open') && $('#over-container').hasClass('is_show') ){
		content_overheight_close(elem);
	}
	
	else if( !$(elem).hasClass('is_open') && !$('#over-container').hasClass('is_show') ){
		content_overheight_open(elem);
	}
	
	
	else if( !$(elem).hasClass('is_open') && $('#over-container').hasClass('is_show') ){
		content_overheight_close(elem);
		setTimeout(function(){
				content_overheight_open(elem);
			}, 100);
	}

	else if( $(elem).hasClass('is_open') && !$('#over-container').hasClass('is_show') ){
		content_overheight_close(elem);
	}
	
}


function content_overheight_close(elem){
	overheight_ScrollOn();
	$(elem).removeClass('is_open');
	$('.overheight_open_button').removeClass('is_open');
	$('#over-container').removeClass('is_show').fadeOut('300');
	$('#over-container .overheight_close_button').remove();
}
function content_overheight_open(elem){
	overheight_ScrollOff(); 
	$(elem).addClass('is_open').addClass('overheight_open_button');
	
	var content = $('#'+$(elem).attr('content')).html();
	$('#over-content').html(content);
	if($(elem).attr('close-button')){
		$('#over-container').append('<a class="overheight_close_button" href="javascript:;" onclick="content_overheight_close( )"></a>');
	}
	setTimeout(function(){
		$('#over-container').addClass('is_show').fadeIn('300');
	}, 100); 	
}

//Р¤СѓРЅРєС†РёСЏ РѕС‚РєР»СЋС‡РµРЅРёСЏ СЃРєСЂРѕР»Р»Р° РґРѕРєСѓРјРµРЅС‚Р°
function overheight_ScrollOff () {
	if($(window).innerHeight() < $('body')[0].scrollHeight){  
		var winScrollTop = $(document).scrollTop();
		$('body').addClass('ScrollOff').attr('scroll', winScrollTop).css({
				'position':'fixed',
				'top': -winScrollTop,
				'overflow-y': 'scroll'
				});
	}
}
//РћС‚РєР»СЋС‡Р°РµРј Р·Р°РїСЂРµС‚ СЃРєСЂРѕР»Р°
function overheight_ScrollOn () {
	if($('body').hasClass('ScrollOff')){
		
		$('body').removeClass('ScrollOff').css({
			'position':'relative',
			'top': 'auto',
			'overflow-y': 'auto'
			});
		$(document).scrollTop($('html').attr('scroll'));
	}
}



/*************** overheight ****************/	