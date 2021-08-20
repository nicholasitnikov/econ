$(function() {

	var cart = [];

	function calculateTotal() {

		var price = 0;

		$.each(cart, function(i) {

			price += cart[i].price;

		});

		return price;

	}

	function updateUI() {

		$('.cart-items').html('');

		$.each(cart, function(i) {

			$('.cart-items').append('<div class="cart-item"><img src="https://www.econ.store/uploads/' + cart[i].image1.filename + '" height="100" sizes="100vw" alt=""><div class="cart-item-name cart-text-margins">' + cart[i].heading + '</div><div>' + cart[i].price + ' ₽</div></div>')

		});

		$('.cart-total-price').html(calculateTotal(cart) + ' ₽')
		$('.cart-link-total').html(calculateTotal(cart) + ' ₽')

	}

	if(localStorage.getItem('cart') == null) {
		localStorage.setItem('cart', JSON.stringify(cart));
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart);
	}

	updateUI();

});