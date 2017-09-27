var sandwich = document.getElementsByClassName('b-cmn-toggle-switch')[0];
var menu = document.getElementsByClassName('b-menu')[0];
sandwich.addEventListener('click', openMenu);

function openMenu() {
	menu.style.right = '0';
	sandwich.removeEventListener('click', openMenu);
	sandwich.addEventListener('click', closeMenu);
}

function closeMenu() {
	menu.style.right = '-150px';
	sandwich.removeEventListener('click', closeMenu);
	sandwich.addEventListener('click', openMenu);
} 