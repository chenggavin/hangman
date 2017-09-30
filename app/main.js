var keys = document.getElementsByClass








document.onreadystatechange = function90 {
	if(document.readyState === "interactive") {
		resetGame();
		for (i = 0; i < keys.length; i++) {
			keys[i].addEventListener("click", buttonLogic)

		}
	}
};




function cycleImages () {


};