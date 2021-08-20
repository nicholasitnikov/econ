$(function() {

	var mode = 'product';

	if($('.product-item').length != 0) {
		mode = 'product-item'
		console.log(mode)
	}

	var cart = [];

	function isIDinCart(id, callback) {

		if(cart.length == 0) {
			callback(false);
			return;
		}

		$.each(cart, function(i) {

			if(cart[i]._id.indexOf(id) != -1) {
				callback(true);
				return;
				
			}

			if(i == cart.length - 1) {
				callback(false);
				return;
			}

		});

	}

	function prepareUI() {

		$.each($('.' + mode), function(i) {

			var currentProduct = $('.' + mode)[i]
			var addToCart = $(currentProduct).find('.add-to-cart');
			var _id = $(addToCart).attr('product-id');

			isIDinCart(_id, function(result) {

				if(result) {
					$(addToCart).addClass('selected')
					$(addToCart).find('.add-to-cart-text').html('Добавлен!');
					$(addToCart).find('.add-to-cart-price').remove();
					$(currentProduct).find('.option').css('opacity', '0.2');
					$($(currentProduct).find('.option')).removeClass('selected')
					
				} else if($(addToCart).hasClass('selected') == false) {
					$($(currentProduct).find('.option')[0]).addClass('selected')
				}

			});

			

			



		});

	}

	function saveToCart(product) {

		cart.push(product);
		localStorage.setItem('cart', JSON.stringify(cart));

	}

	function calculateTotal() {

		var price = 0;

		$.each(cart, function(i) {

			price += cart[i].price;

		});

		return price;

	}

	function updateUI() {

		var totalPrice = calculateTotal();
		$('.cart-link-total').html(totalPrice + " ₽");

	}

	if(localStorage.getItem('cart') == null) {
		localStorage.setItem('cart', JSON.stringify(cart));
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart);
	}

	prepareUI();
	updateUI();

	if($('.currentProducts').length != 0) {
		var currentProducts = JSON.parse($('.currentProducts').val());
	}

	$('.option').on('click', function() {

		if($(this).parent().parent().find('.add-to-cart').hasClass('selected') == false) {
			$(this).parent().find('.option').removeClass('selected');
			$(this).addClass('selected');
		}

	});

	$('.currentProducts').remove();

	$('.add-to-cart').on('click', function() {

		var strongThis = $(this);

		var productID = strongThis.attr('product-id')

		$.each(currentProducts, function(i) {

			if(currentProducts[i]._id == productID && strongThis.hasClass('selected') == false) {

				var selectedOption = strongThis.parent().find('.options').find('.selected');

				currentProducts[i].selectedOption = selectedOption.html();
				strongThis.addClass('selected');
				strongThis.find('.add-to-cart-text').html('Добавлен!');
				strongThis.find('.add-to-cart-price').remove();
				saveToCart(currentProducts[i]);
				updateUI();
				prepareUI();

			}

		});

	});

});