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

	const colorName = this.className;

	// Add the current element class to the document body (change its color).
	document.body.classList.add(colorName);

	// Update page title to reflect color choice.
	titleCaseColorName = colorName.slice(0, 1).toUpperCase() + colorName.slice(1);
	document.querySelector('h1').textContent = titleCaseColorName;

	updateActive();
};

// Highlight active color when checkbox is checked.
showActive.addEventListener('click', updateActive);

menuItems.forEach(function(currentValue) {
	// Change background color on clicking a menu item.
	currentValue.addEventListener('click', changeColor);

	// Close menu on clicking a menu item.
	currentValue.addEventListener('click', function() {
		document.querySelector('.hamburger-menu').classList.add('no-hover');
	});
});

// Remove no-hover class when opening the menu.
document.querySelector('.hamburger-icon').addEventListener('mouseover', function() {
	document.querySelector('.no-hover').classList.remove('no-hover');
});

// Change background color when corresponding key is pressed.
document.addEventListener('keypress', function(event) {
	switch (event.key) {
		case '0':
			document.querySelector('.black').click();
			break;
		case '1':
			document.querySelector('.red').click();
			break;
		case '2':
			document.querySelector('.green').click();
			break;
		case '3':
			document.querySelector('.yellow').click();
			break;
		case '4':
			document.querySelector('.blue').click();
			break;
		case '5':
			document.querySelector('.magenta').click();
			break;
		case '6':
			document.querySelector('.cyan').click();
			break;
		case '7':
			document.querySelector('.white').click();
			break;
		case '-':
			location.reload();
			break;
	}
});
