function ApplyRacialMod() {
	var raceName = document.getElementById("raceSelector").value.replace(" ","").toLowerCase();
	
	var race = GetRaceObj(raceName);
	var lm = document.getElementById("learnmore");
	if (race.link != null) {
		lm.className = "lmenabled";
		lm.setAttribute("href", race.link);
		lm.disabled = false;
	} else {
		lm.className = "lmdisabled";
		lm.removeAttribute("href");
		lm.disabled = true;
	}
	for (var i = 0; i < abilityAbbr.length; i++) {
		var inputBox = document.getElementsByName("racemod")[i];
		if (race.mods == null || race.mods[i] == null) {
			inputBox.value = 0;
		} else {
			inputBox.value = race.mods[i];
		}

		inputBox.disabled = race.modType == modifierTypes.preset || (race.mods != null && race.mods[i] == null);
		
	    var raw = document.getElementsByName("raw")[i];
		if (race.mods != null && race.mods[i] == null) {
			raw.value = 10;
			raw.disabled = true;
			CalculateTotalPoints();
		} else raw.disabled = false;
	}
	
	CalculateTotalValues();
}

function GetRaceObj(name) {
	for (var i = 0; i < races.length; i++) {
		for (var j = 0; j < races[i].races.length; j++) {
			var r = races[i].races[j];
			if (r.name.toLowerCase() == name.toLowerCase()) return r;
		}
	} return null;
}

function CalculateTotalValues() {
	for (var i = 0; i < abilityAbbr.length; i++) {
		var total = 
			parseInt(document.getElementsByName("raw")[i].value) 
			+ parseInt(document.getElementsByName("racemod")[i].value);
		document.getElementsByClassName("total")[i].innerText = total;
	}
	CalculateModifiers();
	SetPrintout();
}

function GetMod(score) {
	var mod = Math.floor((score - 10) / 2);
	if (mod > 0) mod = "+" + mod;
	return mod.toString();
}

function CalculateModifiers() {
	for (var i = 0; i < abilityAbbr.length; i++) {
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
	for (var i = 0; i < abilityAbbr.length; i++) total += GetPointCost(parseInt(document.getElementsByName("raw")[i].value));
	document.getElementById("pointTotal").innerText = total;
}

function PurchaseChange() {
	CalculateTotalValues();
	CalculateTotalPoints();
}

function SetPrintout() {
	var text = "";
	for (var i = 0; i < abilityAbbr.length; i++)
		text += abilityAbbr[i] + ": " + document.getElementsByClassName("total")[i].innerText + " ";
	document.getElementById("printout").value = text;
}

function LoadRaces() {
	for (var i = 0; i < races.length; i++) {
		var group = races[i];
		var optgroup = document.createElement("optgroup");
		optgroup.setAttribute("label", group.name);
		for (var j = 0; j < group.races.length; j++) {
			var race = group.races[j];
			var opt = document.createElement("option");
			opt.innerText = race.name;
			optgroup.appendChild(opt);
		} document.getElementById("raceSelector").appendChild(optgroup);
	}
}