# jQuery based image magnifier
Original by MonsterDuang
Updated and edited by IDEDOnline for SureSpecs
(There is almost none of the original left in my version so to upgrade please completely remove the original script and html, then install this one)

#### Instructions
You need to include jQuery and Bootstrap 3+ in your html to make this function

Include the following scripts.
<script src="scripts/zoom-image.js"></script>
<script src="scripts/zoom-image-main.js"></script>

Include the following css file, edit this to fit your sites styles.
<link rel="stylesheet" href="css/main.css">

Inset the following html into your page within the container you want the zoom carousel to appear.

[code]
//Copy after here
<div class="img-zoom-container col-xs-12" data-lrgwidth="4250" data-lrgheight="1560" >
  <div class="show" href="images/IMG_0001.jpg" data-hres="images/hres/IMG_0001.jpg">
	<img src="images/IMG_0001.jpg" id="show-img-crossfade" style="display:none;position:absolute;top:0;left:0;right:0;bottom:0;">
    <img src="images/IMG_0001.jpg" id="show-img">
	<div class="img-zoom-cover"></div>
	<a class="visible-xs visible-sm" id="img-zoom-mobileView" onclick="mobileZoom();" style="position:absolute;top:0;bottom:0;left:0;right:0;z-index:10;"></a>
  </div>
  <div class="small-img">
    <img src="images/img-zoom-svg/chevron-left-regular.svg" class="icon-left" alt="" id="prev-img">
    <div class="small-container">
      <div id="small-img-roll">
        <img src="images/IMG_0001.jpg" data-hres="images/hres/IMG_0001.jpg" class="show-small-img" alt="">
        <img src="images/IMG_0002.jpg" data-hres="images/hres/IMG_0002.jpg" class="show-small-img" alt="">
        <img src="images/IMG_0003.jpg" data-hres="images/hres/IMG_0003.jpg" class="show-small-img" alt="">
        <img src="images/IMG_0004.jpg" data-hres="images/hres/IMG_0004.jpg" class="show-small-img" alt="">
      </div>
    </div>
    <img src="images/img-zoom-svg/chevron-right-regular.svg" class="icon-right" alt="" id="next-img">
  </div>
</div>
</div>
<div id="img-zoom-mobileViewer">
	<p style="font-size: 3em;height:5vh;">Press and drag to move</p>
	<div class="img-zoom-mobileViewContainer">
		<img id="img-zoom-mobileViewImg" src="images/hres/IMG_0001.jpg"/>
	</div>
	<a style="font-size: 3em;" onclick="mobileZoomClose();" id="img-zoom-mobileViewerClose">Close</a>
</div>
//End of copy here
[/code]

You will need to alter the follwoing lines in the html to fit your configuration:
<div class="img-zoom-container col-xs-12" data-lrgwidth="4250" data-lrgheight="1560" >

data-lrgwidth="4250" - should be the width of the zoomed image this will be used to calculate the images position in accordance with mouse location.
data-lrgheight="1560" - should be the height of the zoomed image this will be used to calculate the images position in accordance with mouse location.

Next you will need to change the image urls of the following two elements to be the first image in your carousel
<div class="show" href="images/IMG_0001.jpg" data-hres="images/hres/IMG_0001.jpg">
<img src="images/IMG_0001.jpg" id="show-img">
The data-hres should be the url of the zoomed in version of your image or the hi resolution version.

Then within the small-img-roll element you need to add your thumbnails in the following format 
<div id="small-img-roll">
	<img src="images/IMG_0001.jpg" data-hres="images/hres/IMG_0001.jpg" class="show-small-img" alt="">
	<img src="images/IMG_0002.jpg" data-hres="images/hres/IMG_0002.jpg" class="show-small-img" alt="">
	<img src="images/IMG_0003.jpg" data-hres="images/hres/IMG_0003.jpg" class="show-small-img" alt="">
	<img src="images/IMG_0004.jpg" data-hres="images/hres/IMG_0004.jpg" class="show-small-img" alt="">
</div>
Note the data-hres attribute this will need to be set for each thumbnail to point to the zoom version and these should all be uniform with the previously
set dimensions you can have one or more thumbnails the system should be able to support any amount.

That's it your done open your page in a web browser on mobile or desktop device to see the differences but this should work and be nice and ui friendly in either.