const menuItems = document.querySelectorAll('.hamburger-menu li:not(li:first-child)');
const showActive = document.getElementById('show-active-checkbox');

const updateActive = function() {
	// Remove 'active' class from other elements (if any).
	document.querySelectorAll('.active').forEach(function(currentValue) {
		currentValue.classList.remove('active');
	});

	// If checkbox is checked then add 'active' class to active element.
	const isChecked = document.querySelector('#show-active-checkbox:checked');
	if (isChecked) {

		// Element inside hamburger menu with same class name as the document body.
		const activeElement = document.querySelector(`.hamburger-menu .${document.body.className}`);

		activeElement.classList.add('active');
	}
};

const changeColor = function() {
	// Remove all other classes from the document body (if any).
	document.body.classList.forEach(function(currentValue) {
		document.body.classList.remove(currentValue);
	});

	// Add the current element class to the document body (change its color).
	document.body.classList.add(this.className);

	updateActive();
};

// Highlight active color when checkbox is checked.
showActive.addEventListener('click', updateActive);

// Change background color on clicking a menu item.
menuItems.forEach(function(currentValue) {
	currentValue.addEventListener('click', changeColor);
});
