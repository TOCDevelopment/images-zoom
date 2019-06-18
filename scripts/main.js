
$('.show').zoomImage();
$('.show-small-img:first-of-type').addClass('img-zoom-selected')
$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.show-small-img').click(function () {
  $('#show-img').attr('src', $(this).attr('src'))
  $('#big-img').attr('src', $(this).attr('src'))
  $('#img-zoom-mobileViewImg').attr('src', $(this).data('hres'))
  $(this).attr('alt', 'now').siblings().removeAttr('alt')
  $(this).addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  if ($('#small-img-roll').children().length > 4) {
    if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(this).index() - 2) * 142.2 + 'px')
    } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 142.2 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
// Click '>' Next
$('#next-img').click(function (){
  $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
  $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
  $(".show-small-img[alt='now']").next().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#small-img-roll').children().length > 4) {
    if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 142.2 + 'px')
    } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 142.2 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
// Click '<' Previous
$('#prev-img').click(function (){
  $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
  $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
  $(".show-small-img[alt='now']").prev().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
  $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#small-img-roll').children().length > 4) {
    if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 142.2 + 'px')
    } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 142.2 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
function mobileZoom(){
	$('#img-zoom-mobileViewer').show();
}
function mobileZoomClose(){
	$('#img-zoom-mobileViewer').hide();
}
$(document).ready(function(){
	$('#small-img-roll').css('width',152.56 * $('#small-img-roll').children().length + 'px')
})