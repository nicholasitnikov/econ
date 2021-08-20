$(function() {

	$('.product-item-image-mini').on('click', function() {

		var oldSrc = $('.image-4').attr('src')
		$('.image-4').attr('src', $(this).attr('src'));
		$(this).attr('src', oldSrc)

	});

});