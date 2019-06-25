function repositionThumb(){
	var csThumb = $('.show-small-img').index($('.img-zoom-selected'))//0 index count to selected
	var thumbContainer = parseInt($('.small-container').css('width')) //width of container when divided in half represents center of container
	var selectedThumbWidth = parseInt($('.img-zoom-selected').css('width')) //width of the selected thumb (divide in half to place middle of thumb in center)
	var thumbWidth = parseInt($('.show-small-img:not(.img-zoom-selected)').css('width')) //width of non-selected thumbnails
	$('#small-img-roll').animate({
    left: ((thumbContainer/2)-((thumbWidth*csThumb)+(selectedThumbWidth/2)))+'px'
  }, 500, );
}

$('.show').zoomImage();
$('.show-small-img:first-of-type').addClass('img-zoom-selected')
$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.show-small-img').click(function () {
  $('#show-img').attr('src', $(this).attr('src'))
  $('#big-img').attr('src', $(this).attr('src'))
  $('#img-zoom-mobileViewImg').attr('src', $(this).data('hres'))
  $(this).attr('alt', 'now').siblings().removeAttr('alt')
  $(this).addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  repositionThumb();
})
// Click '>' Next
$('#next-img').click(function (){
  $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
  $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
  $(".show-small-img[alt='now']").next().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
  repositionThumb();
})
// Click '<' Previous
$('#prev-img').click(function (){
  $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
  $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
  $(".show-small-img[alt='now']").prev().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
  repositionThumb();
})
function mobileZoom(){
	$('#img-zoom-mobileViewer').show();
}
function mobileZoomClose(){
	$('#img-zoom-mobileViewer').hide();
}

$(document).ready(function(){
	$('#small-img-roll').css('width',(parseInt($('.show-small-img:not(.img-zoom-selected)').css('width'))+parseInt($('.show-small-img:not(.img-zoom-selected)').css('margin-right'))) * $('#small-img-roll').children().length + 'px')
	var thumbwidth = parseInt($('.img-zoom-selected').css('width'))
	var thumbcontainer = parseInt($('.small-container').css('width'))
	$('#small-img-roll').css('left',((thumbcontainer/2)-(thumbwidth/2))+'px')
	window.addEventListener('resize', function () {
		var csThumb = $('.show-small-img').index($('.img-zoom-selected'))
		var thumbContainer = parseInt($('.small-container').css('width'))
		var selectedThumbWidth = parseInt($('.img-zoom-selected').css('width'))
		var thumbWidth = parseInt($('.show-small-img:not(.img-zoom-selected)').css('width'))
		$('#small-img-roll').css('left',((thumbContainer/2)-((thumbWidth*csThumb)+(selectedThumbWidth/2)))+'px')
	}, false);
})
