const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = function () {
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
};
closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener("click", closeModal);




/* ====================================== */

document.addEventListener('DOMContentLoaded', function() {
	const productInfo = [
	  { id: 1, name: 'Суші', price: 22.99, imageSrc: "img/sushi-6715579_1280.jpg" },
	  { id: 2, name: 'Шніцель', price: 16.50, imageSrc: "img/shnicel1.jpg" },
	  { id: 3, name: 'Бургер', price: 12.99, imageSrc: "img/p_O.jpg" },
	];
 
	let cartItems = [];
 
	let addButtonCart = document.querySelectorAll('.foot__add');
 
	addButtonCart.forEach(function (button) {
	  button.addEventListener('click', function () {
		 let productId = button.dataset.id;
		 let isInCart = cartItems.some(function (item) {
			return item.id === productId;
		 });
		 if (!isInCart) {
			let selectedProduct = productInfo.find(function (product) {
			  return product.id == productId;
			});
			if (selectedProduct) {
			  cartItems.push(selectedProduct);
			  updateCartView();
			}
		 }
	  });
	});
 
	function updateCartView() {
	  let cartContainer = document.querySelector('.flex');
	  let totalPriceElement = document.querySelector('#total-price');
	  let totalPrice = 0;
 
	  cartContainer.innerHTML = '';
 
	  cartItems.forEach(function (item) {
		 let itemDiv = document.createElement('div');
		 itemDiv.classList.add('cart-item');
 
		 let itemImage = document.createElement('img');
		 itemImage.classList.add('foto__koshukk');
		 itemImage.src = item.imageSrc;
		 itemImage.style.width = '150px';
		 itemImage.style.height = '100px';
		 itemDiv.appendChild(itemImage);
 
		 let itemDetails = document.createElement('div');
		 itemDetails.classList.add('product-koshuk__info')
		  
		 let itemName = document.createElement('span');
		 itemName.textContent = item.name;
		 itemDetails.append(itemName)

		 let itemPrice = document.createElement('span');
		 itemPrice.textContent = `$${item.price}`
		 itemDetails.append(itemPrice)
 
		 itemDiv.appendChild(itemDetails);
		 
		 let deleteButton = document.createElement('button');
		 deleteButton.classList.add('btn-x');
		 deleteButton.textContent = 'X';
		 deleteButton.addEventListener('click', function () {
			removeItemFromCart(item.id);
		 });
		 itemDiv.appendChild(deleteButton);
 
		 cartContainer.appendChild(itemDiv);
 
		 totalPrice += item.price;
	  });
 
	  totalPriceElement.textContent = 'Загальна сума $' + totalPrice.toFixed(2);
	  
	  updateCartQuantity();
	}
 
	function updateCartQuantity() {
	  let koshukNumber = document.querySelector('.cart-header__quantity');
	  koshukNumber.textContent = cartItems.length;
	}
 
	function removeItemFromCart(productId) {
	  const index = cartItems.findIndex(function (item) {
		 return item.id == productId;
	  });
	  if (index !== -1) {
		 const removedItem = cartItems.splice(index, 1)[0];
		 updateCartView();
	  }
	}
	updateCartQuantity();
 });
 


