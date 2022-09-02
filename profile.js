console.log("hello world");



function favColor(evt) {
	evt.preventDefault();
	alert('My favorite color is BLUE');
}
color.addEventListener('click', favColor);


function favPlace(evt) {
	evt.preventDefault();
	alert('My favorite place is the REC CENTER');
}
place.addEventListener('click', favPlace);


function favRitual(evt) {
	evt.preventDefault();
	alert('My favorite ritual is WEARING A CERTAIN HEADBAND TO PLAY SPORTS');
}
ritual.addEventListener('click', favRitual);




