(function($){'use strict';if($().masonry){var
$isShop=$(document.body).is('.archive.woocommerce'),$list=($isShop)?($('.products')):($('.posts')),$itemClass=($isShop)?('.product'):('.entry');$list.imagesLoaded(function(){$list.masonry({itemSelector:$itemClass,percentPosition:true,isOriginLeft:('rtl'!==$('html').attr('dir'))});});$(document.body).on('post-load',function(){$list.imagesLoaded(function(){$list.masonry('reload');});});}})(jQuery);