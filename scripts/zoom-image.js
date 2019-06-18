/**
 * Original by MonsterDuang
 * Edited and updated by IDEDOnline
 */
/* Original script did not handle dynamic resizing so didnt work with things like bootstrap, so rewrote almost the entire script to work with resolution changes and dynamic rescaling of image sizes. */
/* Main consideration is that we need to know the large image size prior to script working and then at point of mouse over we need to know the size of the image within the viewport to makes it work with scale,
for this version I will assume all hires versions are the same size, if not then you could rewrite the method it pulls the data attribute to get it from the image along side the location of the high res url. */
/* Using this method you can use two seperate images one to show the smaller resolution and the magnified version seperately (meaning you only load the magnified version on request saving bandwidth). */
 
;(function($) {
	
	$(document).ready(function(){
		
		
		
	});
    /**
     * 1, The thumbnail size is the same as the parent container size
     * 2, Parent container href attribute is the HD image path
     */
    $.fn.zoomImage = function(paras) {
        /**
         * Default parameter
         */
 
		  
		 
        var defaultParas = {
            layerW: 100, // Mask width (overlay)
            layerH: 100, // Mask height (overlay)
            layerOpacity: 0.2, // Mask transparency (overlay)
            layerBgc: '#000', // Mask background color (overlay)
        };

        paras = $.extend({}, defaultParas, paras);

        $(this).each(function() {
            var self = $(this).css({position: 'relative'});
            var selfOffset = self.offset();
            var lrgWidth = $('.img-zoom-container').data("lrgwidth")
			var lrgHeight = $('.img-zoom-container').data("lrgheight")

            self.find('img').css({
                width: '100%',
                height: '100%'
            });

            // Zoom in picture
            var img = $('<img>').attr('src', self.data("hres")).css({
                position: 'absolute',
                left: '0',
                top: '0',
                width: lrgWidth,
                height: lrgHeight
            }).attr('id', 'big-img');

            // Mask
            var layer = $('<div>').css({
                display: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: paras.layerBgc,
                width: paras.layerW,
                height: paras.layerH,
                opacity: paras.layerOpacity,
                border: '1px solid #ccc',
                cursor: 'crosshair'
            });

            // Magnified area
            var showPanel = $('<div>').css({
                display: 'none',
                position: 'absolute',
                overflow: 'hidden',
                left: 0,
                top: selfOffset.top,
                width: $('.img-zoom-container .show').width(),
                height: $('.img-zoom-container .show').height()
            }).append(img);

            self.append(layer).append(showPanel);

            self.on('mousemove', function(e) {
				//Get sizes incase of resize
				var crntWidth = $('.img-zoom-container .show').width()
				var crntHeight = $('.img-zoom-container .show').height()
				var magPosXscale = lrgWidth / crntWidth
				var magPosYscale = lrgHeight / crntHeight	
				
                // The coordinates of the mouse relative to the thumbnail container
                var x = e.pageX - selfOffset.left;
                var y = e.pageY - selfOffset.top;

                if(x <= paras.layerW / 2) {
                    x = 0;
                }else if(x >= lrgWidth - paras.layerW / 2) {
                    x = lrgWidth - paras.layerW;
                }else {
                    x = x - paras.layerW / 2;
                }

                if(y < paras.layerH / 2) {
                    y = 0;
                } else if(y >= lrgHeight - paras.layerH / 2) {
                    y = lrgHeight - paras.layerH;
                } else {
                    y = y - paras.layerH / 2;
                }

                layer.css({
                    left: x,
                    top: y
                });

                img.css({
                    left: -x * magPosXscale,
                    top: -y * magPosYscale
                });
            }).on('mouseenter', function() {
                layer.show();
                showPanel.show();
            }).on('mouseleave', function() {
                layer.hide();
                showPanel.hide();
            });
        });
    }
})(jQuery);
