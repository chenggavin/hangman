var keys = document.getElementsByClassName('key');
var judgeword = document.getElementById('judgeword');
var alphabet = document.getElementById('alphabet');



var counter = 0;
var incorrectGuess=0;


// Have a "word/phrase ready" -possibly a random word generator api.
// Have word hidden initially.
// If 'key' button is pressed unhide the corresponding letter.
// Stop 'key' presses on that specific letter.
// Alert Winning message if all letters are revealed.
// If key is pressed that isn't, cycle to next img of hanging post.
// If img cycle is completed, alert losing message.

var judgeword = ["german shedpherd", "lab", "rottweiler", "beagle", "bulldog", "golden retriever", "great dane", "poodle", "doberman pinscher", "dachshund", "siberian husky", "english mastiff", "boxer", "pug", "chihuahua", "chow chow", "vizsla", "border collie", "bernese moutain dog", "yorkshire terrier", "american pit bull terrier", "shih tzu", "maltese", "australian shedpherd", "grey hound", "akita", "cavalier king charles spaniel", "pomeranian"]


document.addEventListener('keydown', function(event) {
  if (event.keyCode >=65 && event.keyCode <=90) {
  	var letter = String.fromCharCode(97+event.keyCode-65)
    	guessLetter(letter);
  }
  
});

// function keyLogic () {
// 	judgeword.style.display = "block"
// };


// switch ()
// 	case: aa



function gG() {
	if (winnerWinner === true) {
		alert("Whoooo YOU WIN!")
	}
	else {
		alert('Sorry, better luck next time')
	};
};



var brokenUp = judgeword.innerText.split('');
console.log(brokenUp);



function imgCycle() {
	if (counter === 6) {
		gG();
	}
	else {
		counters++;
		document.getElementById('pics').src = "hangingpost" + counter + ".jpeg";
	}

}































