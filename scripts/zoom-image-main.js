$('#next-img').click(function (){
	// Click '>' Next
	changeImage($('#show-img').attr('src'),$(".show-small-img[alt='now']").next().attr('src'),$(".show-small-img[alt='now']").next().data("hres"))
	$(".show-small-img[alt='now']").next().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
	$(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
	repositionThumb();
})

$('#prev-img').click(function (){
	// Click '<' Previous
	changeImage($('#show-img').attr('src'),$(".show-small-img[alt='now']").prev().attr('src'),$(".show-small-img[alt='now']").prev().data("hres"))
	$(".show-small-img[alt='now']").prev().addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
	$(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
	repositionThumb();
})
function changeImage(currentImage,newImage,newImageHiRes){
	//Crossfade images to make the change easier on the eye
	$('#show-img').attr('src',newImage)
	$('#big-img').attr('src',newImageHiRes)
	$('#show-img-crossfade').attr('src',currentImage).css('display','block').fadeOut( "slow")
	$('#img-zoom-mobileViewImg').attr('src', newImage)
}
function repositionThumb(){
	//thumbnail selection animation and positioning
	var csThumb = $('.show-small-img').index($('.img-zoom-selected'))//0 index count to selected
	var thumbContainer = parseInt($('.small-container').css('width')) //width of container when divided in half represents center of container
	var selectedThumbWidth = parseInt($('.img-zoom-selected').css('width')) //width of the selected thumb (divide in half to place middle of thumb in center)
	var thumbWidth = parseInt($('.show-small-img:not(.img-zoom-selected)').css('width')) //width of non-selected thumbnails
	$('#small-img-roll').animate({
    left: ((thumbContainer/2)-((thumbWidth*csThumb)+(selectedThumbWidth/2)))+'px'
  }, 500, );
}
function mobileZoom(){
	//handle mobile version of zoom feature in a more device friendly manner
	$('#img-zoom-mobileViewer').show();
}
function mobileZoomClose(){
	//user clicks to close the mobile viewer
	$('#img-zoom-mobileViewer').hide();
}

$(document).ready(function(){
	$('.show').zoomImage(); //link zoom function
	$('.show-small-img:first-of-type').addClass('img-zoom-selected') //add selected to the first thumbnail
	$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
	$('#small-img-roll').css('width',(parseInt($('.show-small-img:not(.img-zoom-selected)').css('width'))+parseInt($('.show-small-img:not(.img-zoom-selected)').css('margin-right'))) * $('#small-img-roll').children().length + 'px') //set width of thumbnail holder to total width of all images plus margin.
	var thumbwidth = parseInt($('.img-zoom-selected').css('width'))
	var thumbcontainer = parseInt($('.small-container').css('width'))
	$('#small-img-roll').css('left',((thumbcontainer/2)-(thumbwidth/2))+'px') //center the thumbnails as soon as document is ready and all classes applied
	$('.show-small-img').click(function () {
		//add click handler for thumbnails
		changeImage($('#show-img').attr('src'),$(this).attr('src'),$(this).data("hres"))
	  $(this).attr('alt', 'now').siblings().removeAttr('alt')
	  $(this).addClass('img-zoom-selected').siblings().removeClass('img-zoom-selected')
	  repositionThumb();
	})
	
	window.addEventListener('resize', function () {
		//add listener for window resize event to allow system to keep thumbnails visible in viewport
		var csThumb = $('.show-small-img').index($('.img-zoom-selected'))
		var thumbContainer = parseInt($('.small-container').css('width'))
		var selectedThumbWidth = parseInt($('.img-zoom-selected').css('width'))
		var thumbWidth = parseInt($('.show-small-img:not(.img-zoom-selected)').css('width'))
		$('#small-img-roll').css('left',((thumbContainer/2)-((thumbWidth*csThumb)+(selectedThumbWidth/2)))+'px')
		$('.show').unbind('.zoomImage') //unbind zoom to prevent issues
		$('.show').zoomImage() //rebind function
	}, false);
})
