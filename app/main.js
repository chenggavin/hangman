var keys = document.getElementsByClassName('key');
var judgephrase = document.getElementById('judgephrase');
var alphabet = document.getElementById('alphabet');
var usedLetters = document.getElementById('usedLetters');
var unusedLetters = document.getElementById('unusedLetters');


var counter = 0;
var incorrectGuess=0;



// Have a "word/phrase ready" -possibly a random word generator api.
// Have word hidden initially.


// If 'key' button is pressed unhide the corresponding letter.
// Stop 'key' presses on that specific letter.
// Alert Winning message if all letters are revealed.
// If key is pressed that isn't, cycle to next img of hanging post.
// If img cycle is completed, alert losing message.

var dogList = ["german shedpherd", "lab", "rottweiler", "beagle", "bulldog", "golden retriever", "great dane", "poodle", "doberman pinscher", "dachshund", "siberian husky", "english mastiff", "boxer", "pug", "chihuahua", "chow chow", "vizsla", "border collie", "bernese moutain dog", "yorkshire terrier", "american pit bull terrier", "shih tzu", "maltese", "australian shedpherd", "grey hound", "akita", "cavalier king charles spaniel", "pomeranian"];




var phrase;


function startFire(){
	newPhrase();

}

function newPhrase () {

	var dogBreed = Math.floor(Math.random()*dogList.length);
	phrase = dogList[dogBreed]; 
	console.log(phrase);

	judgephrase.innerHTML = '';
	for (var i = 0; i < phrase.length; i++) {
		var box = document.createElement('div');
		box.id = 'letter_' + i;
		if (phrase[i]==' ') {
			box.className = 'box';
		}
		else { 
			box.className = 'letter box';
		 //box.innerHTML = phrase[i];
		judgephrase.appendChild(box);
		}
	}		

document.addEventListener('keydown', function(event) {
  if (event.keyCode >=65 && event.keyCode <=90) {
  	var letter = String.fromCharCode(97+event.keyCode-65);
  		console.log(letter);
      }
	});
}
	


function correctLetter (letter) {
	for (i = 0; i < phrase.length; i++)
		if (letter == phrase[i]) {
			document.getElementByclassName('box').style.display = 'block';
		}
		
}

// document.getElementById('letter_0').style.display = 'block';



function gG() {
	if (winnerWinner === true) {
		alert("Whoooo YOU WIN!");
	}
	else {
		alert('Sorry, better luck next time');
	}
}






// 	document.getElementById('pics').src = "hangingpost" + counter + ".jpg";
// 	if (counter == 6) {
// 		gG();
// }}

// var brokenUp = judgeword.innerText.split('');
// console.log(brokenUp);
// function keyLogic () {
// 	judgeword.style.display = "block"
// };


// switch ()
// 	case: aa






























