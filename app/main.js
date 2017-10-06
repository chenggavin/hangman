var judgephrase = document.getElementById('judgephrase');
var usedLetters = document.getElementById('usedLetters');
var unusedLetters = document.getElementById('unusedLetters');
var letterJudge;
var letterArray = [];
var wrongCounter = 0;
var phrase;
var winnerWinner = false;
var correctCounter = 0;
var arrayNoSpaces;
var newGame = document.getElementById('newgame');
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');

//					DONE
//  ___________________________________________

// Have a "word/phrase ready" -possibly a random word generator api.
// Have word hidden initially.
// If 'key' button is pressed unhide the corresponding letter.
// If key is pressed that isn't, cycle to next img of hanging post.
// If img cycle is completed, alert losing message.
// Stop 'key' presses on that specific letter.
// Alert Winning message if all letters are revealed.

//					NOT SO DONE
// ___________________________________________

// 			Alert after comepleted
//			On screen keyboard
// 			Begginner Screen
//			Styling
// 			New pictures
// 			Clean up Code



var dogList = ["brussels griffon", "german shedpherd", "lab", "rottweiler", "beagle", "bulldog", "golden retriever", "great dane", "poodle", "doberman pinscher", "dachshund", "siberian husky", "english mastiff", "boxer", "pug", "chihuahua", "chow chow", "vizsla", "border collie", "bernese moutain dog", "yorkshire terrier", "american pit bull terrier", "shih tzu", "maltese", "australian shedpherd", "grey hound", "akita", "cavalier king charles spaniel", "pomeranian"];


function startFire(){
	newPhrase();
	document.getElementById('pics').src = "./images/hangingpost0.jpg";

}

function newFire() {
	newPhrase();
	notification.style.display = 'none';
	document.getElementById('pics').src = "./images/hangingpost0.jpg"; 
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
			box.className = 'letter box num';
		//box.innerHTML = phrase[i];
		}
		judgephrase.appendChild(box);
}
	

function letterJudge (letter) {
	for (i = 0; i < phrase.length; i++) {
		if (letter === phrase[i]) {
			document.getElementById("letter_" + i).innerHTML = letter;
			correctCounter++;
			var letterLength = document.getElementsByClassName('num').length;
			if (correctCounter === letterLength) {
					winnerWinner = true;
					gG();
				}
		} 	
	}		
	if (phrase.includes(letter)==false){
			wrongCounter++;
			console.log(wrongCounter);
			document.getElementById('pics').src = "./images/hangingpost" + wrongCounter + ".jpg";
			if (wrongCounter == 7) {
				gG();
			}
	}
}

document.addEventListener('keydown', function(event) {
  	if (event.keyCode >=65 && event.keyCode <=90) {
  		var letter = String.fromCharCode(97+event.keyCode-65);
  		if (letterArray.includes(letter) === false) {
  			letterJudge(letter);
  			letterArray.push(letter);
  			usedLetters.innerHTML = letterArray.join(' ');
  	}
      }
	});
}
	


function gG() {
	if (winnerWinner === true) {
		notification.style.display = 'block';
		winnerMessage.innerHTML = "PHEW GOT AWAY JUST IN TIME!!!!!!!!!!";
	}
	else {
		notification.style.display = 'block';
		winnerMessage.innerHTML = "NOM NOM NOM NOMNOMONOMNONMONOM!";
	}
}






