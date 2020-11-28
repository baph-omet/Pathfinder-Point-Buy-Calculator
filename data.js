const modifierTypes = {
	custom: 0,
	choose: 1,
	preset: 2
};

const races = [
	{
		name: "Custom Race",
		races: [
			{
				modType: modifierTypes.custom,
				name: "Custom",
				link: null
			}
		]
	},
	{
		name: "Core Races",
		races: [
			{
				modType: modifierTypes.choose,
				mods: null,
				name: "Human",
				link: "https://www.d20pfsrd.com/races/core-races/human"
			},
			{
				modType: modifierTypes.choose,
				mods: null,
				name: "Half-Elf",
				link: "https://www.d20pfsrd.com/races/core-races/half-elf"
			},
			{
				modType: modifierTypes.choose,
				mods: null,
				name: "Half-Orc",
				link: "https://www.d20pfsrd.com/races/core-races/half-orc"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,-2,2,0,0],
				name: "Elf",
				link: "https://www.d20pfsrd.com/races/core-races/elf"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,2,0,2,-2],
				name: "Dwarf",
				link: "https://www.d20pfsrd.com/races/core-races/dwarf"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,0,0,2],
				name: "Halfling",
				link: "https://www.d20pfsrd.com/races/core-races/halfling"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,0,2,0,0,2],
				name: "Gnome",
				link: "https://www.d20pfsrd.com/races/core-races/gnome"
			}
		]
	},
	{
		name: "Featured Races",
		races: [
			{
				modType: modifierTypes.preset,
				mods: [0,0,0,0,2,2],
				name: "Aasimar",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-aasimar"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,2,0,-2],
				name: "Tiefling",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-tiefling"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,-2,2],
				name: "Catfolk",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-catfolk"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,-2,0,0,2],
				name: "Dhampir",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-dhampir"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,-2,0,0,2],
				name: "Drow",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-drow"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,-2,2],
				name: "Kayal",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-fetchling"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,4,0,0,0,-2],
				name: "Goblin",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-goblin"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,2,0,0,0],
				name: "Hobgoblin",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-hobgoblin"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,-2,2],
				name: "Ifrit",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-ifrit"
			},
			{
				modType: modifierTypes.preset,
				mods: [-4,2,-2,0,0,0],
				name: "Kobold",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-kobold"
			},
			{
				modType: modifierTypes.preset,
				mods: [4,0,0,-2,-2,-2],
				name: "Orc",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-orc"
			},
			{
				modType: modifierTypes.preset,
				mods: [2,0,0,0,2,-2],
				name: "Oread",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-oread"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,2,0,0],
				name: "Ratfolk",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-ratfolk"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,-2,2,0,0],
				name: "Sylph",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-sylph"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,-2,0,2,0],
				name: "Tengu",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-tengu"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,0,2,0],
				name: "Undine",
				link: "https://www.d20pfsrd.com/races/other-races/featured-races/arg-undine"
			}
		]
	},
	{
		name: "Uncommon Races",
		races: [
			{
				modType: modifierTypes.preset,
				mods: [0,0,-2,0,2,2],
				name: "Changeling",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-changeling"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,2,0,2,-4],
				name: "Duergar",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-duergar"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,2,0,-2,2],
				name: "Gillman",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-gillmen"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,0,2,0],
				name: "Grippli",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-grippli"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,0,0,2],
				name: "Kitsune",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-kitsune"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,2,0,0,2],
				name: "Merfolk",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-merfolk"
			},
			{
				modType: modifierTypes.preset,
				mods: [2,0,0,-2,0,2],
				name: "Nagaji",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-nagaji"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,-2,2,2,0],
				name: "Samsaran",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-samsaran"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,0,-2],
				name: "Strix",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-strix"
			},
			{
				modType: modifierTypes.preset,
				mods: [2,0,0,-2,0,2],
				name: "Suli",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-suli"
			},
			{
				modType: modifierTypes.preset,
				mods: [-2,2,0,0,2,-4],
				name: "Svirfneblin",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-svirfneblin"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,2,-2],
				name: "Vanara",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-vanaras"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,-2,2],
				name: "Vishkanya",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-vishkanyas"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,2,-2,0],
				name: "Wayang",
				link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-wayang"
			}
		]
	},
	{
		name: "Eumaean Races",
		races: [
			{
				modType: modifierTypes.preset,
				mods: [0,0,2,0,2,-2],
				name: "Mycota",
				link: "https://www.worldanvil.com/w/eumaea-iamvishnu/a/mycota-article"
			},
			{
				modType: modifierTypes.preset,
				mods: [2,2,0,-2,0,0],
				name: "Selachi",
				link: "https://www.worldanvil.com/w/eumaea-iamvishnu/a/selachi-species"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,-2,2],
				name: "Trasgo",
				link: "https://www.worldanvil.com/w/eumaea-iamvishnu/a/trasgo-species"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,null,2,2,-2],
				name: "Calaca",
				link: "https://www.worldanvil.com/w/eumaea-iamvishnu/a/calaca-species"
			}
		]
	}
];

const abilityAbbr = ["STR","DEX","CON","INT","WIS","CHA"];