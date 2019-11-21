var races = {
	custom: {
		modifiers: [0,0,0,0,0,0],
		allowEdit: true
	},
	elf: {
		modifiers: [0,2,-2,2,0,0],
		allowEdit: false
	},
	dwarf: {
		modifiers: [0,0,2,0,2,-2],
		allowEdit: false
	},
	halfling: {
		modifiers: [-2,2,0,0,0,2],
		allowEdit: false
	},
	gnome: {
		modifiers: [-2,0,2,0,0,2],
		allowEdit: false
	}
};

var abilities = ["STR","DEX","CON","INT","WIS","CHA"];

function ApplyRacialMod() {
	var raceName = document.getElementById("raceSelector").value;
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
		inputBox.value = race.modifiers[i];
		inputBox.disabled = !race.allowEdit;
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
	if (score > 7 && score < 14) return score - 10;
	switch (score) {
		case 14: return 5;
		case 15: return 7;
		case 16: return 10;
		case 17: return 13;
		case 18: return 17;
	}
	return NaN;
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
	for (var i = 0; i < abilities.length; i++) {
		text += abilities[i] + ": " + document.getElementsByClassName("total")[i].innerText + " ";
	}
	document.getElementById("printout").value = text;
}
