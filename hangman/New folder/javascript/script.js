
var keyWord = ["silence", "celebration", "invention", "ceaseless", "gurgling", "intoxicant", "mohawk", "horizontal", "orangutang", "hoodwink"]

var keyWordLength = keyWord.length;
console.log(keyWordLength);

var choosenWord;
var choosenWordLength;
var userLetter;
function wordDice() {
	var randomizer=Math.floor((Math.random() * keyWordLength) + 1);
	console.log(randomizer);
	choosenWord=keyWord[randomizer -1]
	console.log(choosenWord);
	choosenWordLength=choosenWord.length;
}
wordDice()
var listenResult;
function listen() {
	// listenResult = document.getElementById("cli").value;
	listenResult = $("#cli").val();
	console.log(listenResult);
	struggle()

}
var submit;
var nextLine; 
var computerText;
var guesses=15;
function struggle() {
	if (repeatStop != 1) {
		makeWord();
	}
	else {
		if(guesses < 1) {
			nextLine.text("$> You better run, son.");
		}
		else{
		// nextLine = document.getElementById("computerVoice");
  //       nextLine.innerHTML="$> The password contains "+ choosenWordLength + " letters. If you can guess one letter, I will reveal it for you.";
  		nextLine = $("#computerVoice");
  		nextLine.text("$> The password contains "+ choosenWordLength + " letters. If you can guess one letter, I will reveal it for you.");
		userLetter= document.getElementById("cli").value;
		userLetter= userLetter.charAt(0);
		document.getElementById("cli").value = "";
		if (userLetter.length > 0) {
		iterationCheck();
		guesses--;
		nextLine.text("$> You have "+guesses+"guesses remaining before the FBI get you.");
		console.log(victory+"I am victory");
			if (victory < 1) {
				nextLine.text("$>Authentication accepted. Welcome Mr. Smith.");
			}
	}
	}
}
	console.log(userLetter)
	document.getElementById("cli").value = "";
  	}
  	console.log(userLetter)

var hitLocation;
var multipleCheck;
var secondHitLocation;
var secondMultipleCheck;
var thirdHitLocation;
var thirdMultipleCheck;
var fourthHitLocation;
var trueSecondHitLocation;
var trueThirdHitlocation;
var trueFourthHitLocation;


function iterationCheck() {
	hitLocation = choosenWord.indexOf(userLetter) +1;
	multipleCheck = choosenWord.slice(hitLocation);
if (hitLocation > 0) {
 secondHitLocation = 0;
 secondMultipleCheck = 0;
 thirdHitLocation= 0;
 thirdMultipleCheck= 0;
 fourthHitLocation= 0;
 trueSecondHitLocation= 0;
 trueThirdHitlocation=0;
 trueFourthHitLocation=0;							
secondHitLocation = multipleCheck.indexOf(userLetter) +1;
secondMultipleCheck = multipleCheck.slice(secondHitLocation);
thirdHitLocation = secondMultipleCheck.indexOf(userLetter) +1;
thirdMultipleCheck = secondMultipleCheck.slice(thirdHitLocation);
fourthHitLocation = thirdMultipleCheck.indexOf(userLetter)+1;
console.log("I am the hitLocation variable : " + hitLocation);
console.log("I am the multipleCheck variable : " + multipleCheck);
console.log("I am the secondHitLocation variable : " + secondHitLocation);
console.log("I am the secondMultipleCheck variable : " + secondMultipleCheck);
console.log("i am the thirdHitLocation varibale : " + thirdHitLocation);
console.log("i am the thirdMultipleCheck variable: " + thirdMultipleCheck);
console.log("I am the fourthHitLocation variable : " + fourthHitLocation);
}
else {
	nextLine.innerHTML="$>Incorrect letter";
}
if (secondHitLocation > 0) {
	trueSecondHitLocation = hitLocation + secondHitLocation;
}
if (thirdHitLocation > 0) {
	trueThirdHitlocation = hitLocation + secondHitLocation + thirdHitLocation;
}
if (fourthHitLocation > 0) {
	trueFourthHitLocaion = hitLocation + secondHitLocation + thirdHitLocation + fourthHitLocation;
}
console.log("true hit location variables : " + hitLocation + "," + trueSecondHitLocation + "," + trueThirdHitlocation + "," + trueFourthHitLocation)
changeSpace(hitLocation);
changeSpace(trueSecondHitLocation);
changeSpace(trueThirdHitlocation);
changeSpace(trueFourthHitLocation);

}
var victory=choosenWord.length
function changeSpace(x) {
	if(x != 0) {
		if(document.getElementById("number"+x).innerHTML != choosenWord.charAt(x-1)) {
	document.getElementById("number"+x).innerHTML= choosenWord.charAt(x-1);
	victory--;
	console.log(victory);

}
}
}


var noose = document.getElementById("gallows");
console.log(noose)
var spaces = [];
var letterCount = [];
var repeatStop
function makeWord () {
	for (var i=0; i < choosenWordLength; i++) {
		spaces[i] = document.createElement("div");
		noose.appendChild(spaces[i]);
		spaces[i].classList.add("trials");
		spaces[i].id ="trials"+(i+1);
		letterCount[i] = document.createElement("p");
		letterCount[i].id = "number"+(i+1);
		spaces[i].appendChild(letterCount[i]);
		document.getElementById("number"+(i+1)).innerHTML = "" + (i+1);
		letterCount[i].classList.add("number");

		console.log(spaces[i]);
		repeatStop=1
	}
	}
	console.log(victory)
