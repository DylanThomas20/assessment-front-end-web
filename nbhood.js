let resturantArr = ["La Casita", "T-bone", "Pier 49 Pizza"]

function randResturant(evt) {
    let randomNum = Math.floor(Math.random()*resturantArr.length)
	evt.preventDefault();
	alert(resturantArr[randomNum]);
}
resturant.addEventListener('click', randResturant);