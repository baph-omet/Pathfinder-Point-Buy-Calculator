var races = {
	custom: [0,0,0,0,0,0],
	elf: [0,2,-2,2,0,0],
	dwarf: [0,0,2,0,2,-2],
	halfling: [-2,2,0,0,0,2],
	gnome: [-2,0,2,0,0,2],
	aasimar: [0,0,0,0,2,2],
    tiefling: [0,2,0,2,0,-2],
	catfolk: [0,2,0,0,-2,2],
	changeling: [0,0,-2,0,2,2],
	dhampir: [0,2,-2,0,0,2],
	drow: [0,2,-2,0,0,2],
	drownoble: [0,4,-2,2,2,2],
	duergar: [0,0,2,0,2,-4],
	fetchling: [0,2,0,0,-2,2],
	gillman: [0,0,2,0,-2,2],
	goblin: [-2,4,0,0,0,-2],
	grippli: [-2,2,0,0,2,0],
	hobgoblin: [0,2,2,0,0,0],
	ifrit: [0,2,0,0,-2,2],
	kitsune: [-2,2,0,0,0,2],
	kobold: [-4,2,-2,0,0,0],
	merfolk: [0,2,2,0,0,2],
	nagaji: [2,0,0,-2,0,2],
	orc: [4,0,0,-2,-2,-2],
	oread: [2,0,0,0,2,-2],
	ratfolk: [-2,2,0,2,0,0],
	samsaran: [0,0,-2,2,2,0],
	strix: [0,2,0,0,0,-2],
	suli: [2,0,0,-2,0,2],
	svirfneblin: [-2,2,0,0,2,-4],
	sylph: [0,2,-2,2,0,0],
	tengu: [0,2,-2,0,2,0],
	undine: [-2,2,0,0,2,0],
	vanara: [0,2,0,0,2,-2],
	vishkanya: [0,2,0,0,-2,2],
	wayang: [0,2,0,2,-2,0]
};

var abilities = ["STR","DEX","CON","INT","WIS","CHA"];

function ApplyRacialMod() {
	var raceName = document.getElementById("raceSelector").value.replace(" ","").toLowerCase();
	var nameFound = false;
	for (var prop in races) {
		if (prop + "" == raceName) {
			nameFound = true;
			break;
		}
	}
	if (!nameFound) raceName = "custom";
	
	var race = races[raceName];
	for (var i = 0; i < abilities.length; i++) {
		var inputBox = document.getElementsByName("racemod")[i];
		inputBox.value = race[i];
		inputBox.disabled = raceName != "custom";
	}
	
	CalculateTotalValues();
}

function CalculateTotalValues() {
	for (var i = 0; i < abilities.length; i++) {
		var total = 
			parseInt(document.getElementsByName("raw")[i].value) 
			+ parseInt(document.getElementsByName("racemod")[i].value);
		document.getElementsByClassName("total")[i].innerText = total;
	}
	CalculateModifiers();
	SetPrintout();
}

function GetMod(score) {
	return Math.floor((score - 10) / 2);
}

function CalculateModifiers() {
	for (var i = 0; i < abilities.length; i++) {
		document.getElementsByClassName("rawmod")[i].innerText = 
			GetMod(parseInt(document.getElementsByName("raw")[i].value));
		document.getElementsByClassName("totalmod")[i].innerText = 
			GetMod(parseInt(document.getElementsByClassName("total")[i].innerText));
	}
}

function GetPointCost(score) {
	if (score == 7) return -4;
	if (score < 14) return score - 10;
	switch (score) {
		case 14: return 5;
		case 15: return 7;
		case 16: return 10;
		case 17: return 13;
		case 18: return 17;
	} return NaN;
}

function CalculateTotalPoints() {
	total = 0;
	for (var i = 0; i < abilities.length; i++) total += GetPointCost(parseInt(document.getElementsByName("raw")[i].value));
	document.getElementById("pointTotal").innerText = total;
}

function PurchaseChange() {
	CalculateTotalValues();
	CalculateTotalPoints();
}

function SetPrintout() {
	var text = "";
	for (var i = 0; i < abilities.length; i++)
		text += abilities[i] + ": " + document.getElementsByClassName("total")[i].innerText + " ";
	document.getElementById("printout").value = text;
}
