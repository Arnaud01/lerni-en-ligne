$(function(){
  
	$maparea = $(".maparea6");
	// Example #6
	$maparea.mapael({
		map : {
			name : "world_countries",
			defaultArea: {
				attrs : {
					stroke : "gray",
					fill : "#fff", // couleur des pays
					"stroke-width" : 1
				}
				, attrsHover : {
					fill : "#f38a03"
					, animDuration : 300
				}
			}
			, zoom : {
				enabled : true
				, step : 0.75
				, maxLevel : 10
			}
		},


		areas: {
			"AF": {
				"value": "35320445",
				"tooltip": {
					"content": "Afghanistan"
				}
			},
			"ZA": {
				"value": "50586757",
				"tooltip": {
					"content": "Afrique du Sud"
				}
			},
			"AL": {
				"value": "3215988",
				"tooltip": {
					"content": "Albanie"
				}
			},
			"DZ": {
				"value": "35980193",

				"tooltip": {
					"content": "Algérie"
				}
			},
			"DE": {
				"value": "81726000",

				"tooltip": {
					"content": "Allemagne"
				}
			},
			"AD": {
				"value": "86165",

				"tooltip": {
					"content": "Andorre"
				}
			},
			"AO": {
				"value": "19618432",

				"tooltip": {
					"content": "Angola"
				}
			},
			"AG": {
				"value": "89612",

				"tooltip": {
					"content": "Antigua et Barbuda"
				}
			},
			"SA": {
				"value": "28082541",

				"tooltip": {
					"content": "Arabie Saoudite"
				}
			},
			"AR": {
				"value": "40764561",

				"tooltip": {
					"content": "Argentine"
				}
			},
			"AM": {
				"value": "3100236",

				"tooltip": {
					"content": "Arménie"
				}
			},
			"AU": {
				"value": "22620600",

				"tooltip": {
					"content": "Australie"
				}
			},
			"AT": {
				"value": "8419000",

				"tooltip": {
					"content": "Autriche"
				}
			},
			"AZ": {
				"value": "9168000",

				"tooltip": {
					"content": "Azerbaïdjan"
				}
			},
			"BS": {
				"value": "347176",

				"tooltip": {
					"content": "Bahamas"
				}
			},
			"BH": {
				"value": "1323535",

				"tooltip": {
					"content": "Bahreïn"
				}
			},
			"BD": {
				"value": "150493658",

				"tooltip": {
					"content": "Bangladesh"
				}
			},
			"BB": {
				"value": "273925",

				"tooltip": {
					"content": "Barbade"
				}
			},
			"BE": {
				"value": "11008000",

				"tooltip": {
					"content": "Belgique"
				}
			},
			"BZ": {
				"value": "356600",

				"tooltip": {
					"content": "Belize"
				}
			},
			"BJ": {
				"value": "9099922",

				"tooltip": {
					"content": "Bénin"
				}
			},
			"BT": {
				"value": "738267",

				"tooltip": {
					"content": "Bhoutan"
				}
			},
			"BY": {
				"value": "9473000",

				"tooltip": {
					"content": "Biélorussie"
				}
			},
			"MM": {
				"value": "48336763",

				"tooltip": {
					"content": "Birmanie"
				}
			},
			"BO": {
				"value": "10088108",

				"tooltip": {
					"content": "Bolivie"
				}
			},
			"BA": {
				"value": "3752228",

				"tooltip": {
					"content": "Bosnie Herzégovine"
				}
			},
			"BW": {
				"value": "2030738",

				"tooltip": {
					"content": "Botswana"
				}
			},
			"BR": {
				"value": "196655014",

				"tooltip": {
					"content": "Brésil"
				}
			},
			"BN": {
				"value": "405938",

				"tooltip": {
					"content": "Brunei"
				}
			},
			"BG": {
				"value": "7476000",

				"tooltip": {
					"content": "Bulgarie"
				}
			},
			"BF": {
				"value": "16967845",

				"tooltip": {
					"content": "Burkina Faso"
				}
			},
			"BI": {
				"value": "8575172",

				"tooltip": {
					"content": "Burundi"
				}
			},
			"KH": {
				"value": "14305183",

				"tooltip": {
					"content": "Cambodge"
				}
			},
			"CM": {
				"value": "20030362",

				"tooltip": {
					"content": "Cameroun"
				}
			},
			"CA": {
				"value": "34482779",

				"tooltip": {
					"content": "Canada"
				}
			},
			"CV": {
				"value": "500585",

				"tooltip": {
					"content": "Cap Vert"
				}
			},
			"CF": {
				"value": "4486837",

				"tooltip": {
					"content": "République centrafricaine"
				}
			},
			"CL": {
				"value": "17269525",

				"tooltip": {
					"content": "Chili"
				}
			},
			"CN": {
				"value": "1344130000",

				"tooltip": {
					"content": "Chine"
				}
			},
			"CY": {
				"value": "1116564",

				"tooltip": {
					"content": "Chypre"
				}
			},
			"CO": {
				"value": "46927125",

				"tooltip": {
					"content": "Colombie"
				}
			},
			"KM": {
				"value": "753943",

				"tooltip": {
					"content": "Comores"
				}
			},
			"CG": {
				"value": "4139748",

				"tooltip": {
					"content": "Congo"
				}
			},
			"CD": {
				"value": "67757577",

				"tooltip": {
					"content": "République démocratique du Congo"
				}
			},
			"KP": {
				"value": "24451285",

				"tooltip": {
					"content": "Corée du Nord"
				}
			},
			"KR": {
				"value": "49779000",

				"tooltip": {
					"content": "Corée du Sud"
				}
			},
			"CR": {
				"value": "4726575",

				"tooltip": {
					"content": "Costa Rica"
				}
			},
			"CI": {
				"value": "20152894",

				"tooltip": {
					"content": "Côte d'Ivoire"
				}
			},
			"HR": {
				"value": "4407000",

				"tooltip": {
					"content": "Croatie"
				}
			},
			"CU": {
				"value": "11253665",

				"tooltip": {
					"content": "Cuba"
				}
			},
			"DK": {
				"value": "5574000",

				"tooltip": {
					"content": "Danemark"
				}
			},
			"DJ": {
				"value": "905564",

				"tooltip": {
					"content": "Djibouti"
				}
			},
			"DM": {
				"value": "67675",

				"tooltip": {
					"content": "Dominique"
				}
			},
			"EG": {
				"value": "82536770",

				"tooltip": {
					"content": "Égypte"
				}
			},
			"AE": {
				"value": "7890924",

				"tooltip": {
					"content": "Émirats arabes unis"
				}
			},
			"EC": {
				"value": "14666055",

				"tooltip": {
					"content": "Équateur"
				}
			},
			"ER": {
				"value": "5415280",

				"tooltip": {
					"content": "Érythrée"
				}
			},
			"ES": {
				"value": "46235000",

				"tooltip": {
					"content": "Espagne"
				}
			},
			"EE": {
				"value": "1340000",

				"tooltip": {
					"content": "Estonie"
				}
			},
			"US": {
				"value": "311591917",

				"tooltip": {
					"content": "États-Unis"
				}
			},
			"ET": {
				"value": "84734262",

				"tooltip": {
					"content": "Éthiopie"
				}
			},
			"FJ": {
				"value": "868406",

				"tooltip": {
					"content": "Fidji"
				}
			},
			"FI": {
				"value": "5387000",

				"tooltip": {
					"content": "Finlande"
				}
			},
			"FR": {
				"value": "65436552",

				"tooltip": {
					"content": "France"
				}
			},
			"GA": {
				"value": "1534262",

				"tooltip": {
					"content": "Gabon"
				}
			},
			"GM": {
				"value": "1776103",

				"tooltip": {
					"content": "Gambie"
				}
			},
			"GE": {
				"value": "4486000",

				"tooltip": {
					"content": "Géorgie"
				}
			},
			"GH": {
				"value": "24965816",

				"tooltip": {
					"content": "Ghana"
				}
			},
			"GR": {
				"value": "11304000",

				"tooltip": {
					"content": "Grèce"
				}
			},
			"GD": {
				"value": "104890",

				"tooltip": {
					"content": "Grenade"
				}
			},
			"GT": {
				"value": "14757316",

				"tooltip": {
					"content": "Guatemala"
				}
			},
			"GN": {
				"value": "10221808",

				"tooltip": {
					"content": "Guinée"
				}
			},
			"GQ": {
				"value": "720213",

				"tooltip": {
					"content": "Guinée équatoriale"
				}
			},
			"GW": {
				"value": "1547061",

				"tooltip": {
					"content": "Guinée-Bissau"
				}
			},
			"GY": {
				"value": "756040",

				"tooltip": {
					"content": "Guyana"
				}
			},
			"HT": {
				"value": "10123787",

				"tooltip": {
					"content": "Haïti"
				}
			},
			"HN": {
				"value": "7754687",

				"tooltip": {
					"content": "Honduras"
				}
			},
			"HU": {
				"value": "9971000",

				"tooltip": {
					"content": "Hongrie"
				}
			},
			"JM": {
				"value": "2709300",

				"tooltip": {
					"content": "Jamaïque"
				}
			},
			"JP": {
				"value": "127817277",

				"tooltip": {
					"content": "Japon"
				}
			},
			"MH": {
				"value": "54816",

				"tooltip": {
					"content": "Îles Marshall"
				}
			},
			"PW": {
				"value": "20609",

				"tooltip": {
					"content": "Palaos"
				}
			},
			"SB": {
				"value": "552267",

				"tooltip": {
					"content": "Salomon"
				}
			},
			"IN": {
				"value": "1241491960",

				"tooltip": {
					"content": "Inde"
				}
			},
			"ID": {
				"value": "242325638",

				"tooltip": {
					"content": "Indonésie"
				}
			},
			"JO": {
				"value": "6181000",

				"tooltip": {
					"content": "Jordanie"
				}
			},
			"IR": {
				"value": "74798599",

				"tooltip": {
					"content": "Iran"
				}
			},
			"IQ": {
				"value": "32961959",

				"tooltip": {
					"content": "Irak"
				}
			},
			"IE": {
				"value": "4487000",

				"tooltip": {
					"content": "Irlande"
				}
			},
			"IS": {
				"value": "319000",

				"tooltip": {
					"content": "Islande"
				}
			},
			"IL": {
				"value": "7765700",

				"tooltip": {
					"content": "Israël"
				}
			},
			"IT": {
				"value": "60770000",

				"tooltip": {
					"content": "Italie"
				}
			},
			"KZ": {
				"value": "16558459",

				"tooltip": {
					"content": "Kazakhstan"
				}
			},
			"KE": {
				"value": "41609728",

				"tooltip": {
					"content": "Kenya"
				}
			},
			"KG": {
				"value": "5507000",

				"tooltip": {
					"content": "Kirghizistan"
				}
			},
			"KI": {
				"value": "101093",

				"tooltip": {
					"content": "Kiribati"
				}
			},
			"KW": {
				"value": "2818042",

				"tooltip": {
					"content": "Koweït"
				}
			},
			"LA": {
				"value": "6288037",

				"tooltip": {
					"content": "Laos"
				}
			},
			"LS": {
				"value": "2193843",

				"tooltip": {
					"content": "Lesotho"
				}
			},
			"LV": {
				"value": "2220000",

				"tooltip": {
					"content": "Lettonie"
				}
			},
			"LB": {
				"value": "4259405",

				"tooltip": {
					"content": "Liban"
				}
			},
			"LR": {
				"value": "4128572",

				"tooltip": {
					"content": "Libéria"
				}
			},
			"LY": {
				"value": "6422772",

				"tooltip": {
					"content": "Libye"
				}
			},
			"LI": {
				"value": "36304",

				"tooltip": {
					"content": "Liechtenstein"
				}
			},
			"LT": {
				"value": "3203000",

				"tooltip": {
					"content": "Lituanie"
				}
			},
			"LU": {
				"value": "517000",

				"tooltip": {
					"content": "Luxembourg"
				}
			},
			"MK": {
				"value": "2063893",

				"tooltip": {
					"content": "Macédoine"
				}
			},
			"MG": {
				"value": "21315135",

				"tooltip": {
					"content": "Madagascar"
				}
			},
			"MY": {
				"value": "28859154",

				"tooltip": {
					"content": "Malaisie"
				}
			},
			"MW": {
				"value": "15380888",

				"tooltip": {
					"content": "Malawi"
				}
			},
			"MV": {
				"value": "320081",

				"tooltip": {
					"content": "Maldives"
				}
			},
			"ML": {
				"value": "15839538",

				"tooltip": {
					"content": "Mali"
				}
			},
			"MT": {
				"value": "419000",

				"tooltip": {
					"content": "Malte"
				}
			},
			"MA": {
				"value": "32272974",

				"tooltip": {
					"content": "Maroc"
				}
			},
			"MU": {
				"value": "1286051",

				"tooltip": {
					"content": "Maurice"
				}
			},
			"MR": {
				"value": "3541540",

				"tooltip": {
					"content": "Mauritanie"
				}
			},
			"MX": {
				"value": "114793341",

				"tooltip": {
					"content": "Mexique"
				}
			},
			"FM": {
				"value": "111542",

				"tooltip": {
					"content": "Micronésie"
				}
			},
			"MD": {
				"value": "3559000",

				"tooltip": {
					"content": "Moldavie"
				}
			},
			"MC": {
				"value": "35427",

				"tooltip": {
					"content": "Monaco"
				}
			},
			"MN": {
				"value": "2800114",

				"tooltip": {
					"content": "Mongolie"
				}
			},
			"ME": {
				"value": "632261",

				"tooltip": {
					"content": "Monténégro"
				}
			},
			"MZ": {
				"value": "23929708",

				"tooltip": {
					"content": "Mozambique"
				}
			},
			"NA": {
				"value": "2324004",

				"tooltip": {
					"content": "Namibie"
				}
			},
			"NP": {
				"value": "30485798",

				"tooltip": {
					"content": "Népal"
				}
			},
			"NI": {
				"value": "5869859",

				"tooltip": {
					"content": "Nicaragua"
				}
			},
			"NE": {
				"value": "16068994",

				"tooltip": {
					"content": "Niger"
				}
			},
			"NG": {
				"value": "162470737",

				"tooltip": {
					"content": "Nigéria"
				}
			},
			"NO": {
				"value": "4952000",

				"tooltip": {
					"content": "Norvège"
				}
			},
			"NZ": {
				"value": "4405200",

				"tooltip": {
					"content": "Nouvelle-Zélande"
				}
			},
			"OM": {
				"value": "2846145",

				"tooltip": {
					"content": "Oman"
				}
			},
			"UG": {
				"value": "34509205",

				"tooltip": {
					"content": "Ouganda"
				}
			},
			"UZ": {
				"value": "29341200",

				"tooltip": {
					"content": "Ouzbékistan"
				}
			},
			"PK": {
				"value": "176745364",

				"tooltip": {
					"content": "Pakistan"
				}
			},
			"PS": {
				"value": "4019433",

				"tooltip": {
					"content": "Palestine"
				}
			},
			"PA": {
				"value": "3571185",

				"tooltip": {
					"content": "Panama"
				}
			},
			"PG": {
				"value": "7013829",

				"tooltip": {
					"content": "Papouasie Nouvelle Guinée"
				}
			},
			"PY": {
				"value": "6568290",

				"tooltip": {
					"content": "Paraguay"
				}
			},
			"NL": {
				"value": "16696000",

				"tooltip": {
					"content": "Pays-Bas"
				}
			},
			"PE": {
				"value": "29399817",

				"tooltip": {
					"content": "Pérou"
				}
			},
			"PH": {
				"value": "94852030",

				"tooltip": {
					"content": "Philippines"
				}
			},
			"PL": {
				"value": "38216000",

				"tooltip": {
					"content": "Pologne"
				}
			},
			"PT": {
				"value": "10637000",

				"tooltip": {
					"content": "Portugal"
				}
			},
			"QA": {
				"value": "1870041",

				"tooltip": {
					"content": "Qatar"
				}
			},
			"DO": {
				"value": "10056181",

				"tooltip": {
					"content": "République Dominicaine"
				}
			},
			"RO": {
				"value": "21390000",

				"tooltip": {
					"content": "Roumanie"
				}
			},
			"GB": {
				"value": "62641000",

				"tooltip": {
					"content": "Royaume-Uni"
				}
			},
			"RU": {
				"value": "141930000",

				"tooltip": {
					"content": "Russie"
				}
			},
			"RW": {
				"value": "10942950",

				"tooltip": {
					"content": "Rwanda"
				}
			},
			"KN": {
				"value": "53051",

				"tooltip": {
					"content": "Saint-Christophe-et-Niévès"
				}
			},
			"SM": {
				"value": "31735",

				"tooltip": {
					"content": "Saint-Marin"
				}
			},
			"VC": {
				"value": "109365",

				"tooltip": {
					"content": "Saint-Vincent-et-les-Grenadines"
				}
			},
			"LC": {
				"value": "176000",

				"tooltip": {
					"content": "Sainte-Lucie"
				}
			},
			"SV": {
				"value": "6227491",

				"tooltip": {
					"content": "Salvador"
				}
			},
			"ST": {
				"value": "168526",

				"tooltip": {
					"content": "Sao Tomé et Principe"
				}
			},
			"SN": {
				"value": "12767556",

				"tooltip": {
					"content": "Sénégal"
				}
			},
			"RS": {
				"value": "7261000",

				"tooltip": {
					"content": "Serbie"
				}
			},
			"SC": {
				"value": "86000",

				"tooltip": {
					"content": "Seychelles"
				}
			},
			"SL": {
				"value": "5997486",

				"tooltip": {
					"content": "Sierra Leone"
				}
			},
			"SG": {
				"value": "5183700",

				"tooltip": {
					"content": "Singapour"
				}
			},
			"SK": {
				"value": "5440000",

				"tooltip": {
					"content": "Slovaquie"
				}
			},
			"SI": {
				"value": "2052000",

				"tooltip": {
					"content": "Slovénie"
				}
			},
			"SO": {
				"value": "9556873",

				"tooltip": {
					"content": "Somalie"
				}
			},
			"SD": {
				"value": "34318385",

				"tooltip": {
					"content": "Soudan"
				}
			},
			"SS": {
				"value": "10314021",

				"tooltip": {
					"content": "Sud Soudan"
				}
			},
			"LK": {
				"value": "20869000",

				"tooltip": {
					"content": "Sri Lanka"
				}
			},
			"SE": {
				"value": "9453000",

				"tooltip": {
					"content": "Suède"
				}
			},
			"CH": {
				"value": "7907000",

				"tooltip": {
					"content": "Suisse"
				}
			},
			"SR": {
				"value": "529419",

				"tooltip": {
					"content": "Suriname"
				}
			},
			"SZ": {
				"value": "1067773",

				"tooltip": {
					"content": "Swaziland"
				}
			},
			"SY": {
				"value": "20820311",

				"tooltip": {
					"content": "Syrie"
				}
			},
			"TJ": {
				"value": "6976958",

				"tooltip": {
					"content": "Tadjikistan"
				}
			},
			"TZ": {
				"value": "46218486",

				"tooltip": {
					"content": "Tanzanie"
				}
			},
			"TD": {
				"value": "11525496",

				"tooltip": {
					"content": "Tchad"
				}
			},
			"CZ": {
				"value": "10546000",

				"tooltip": {
					"content": "République tchèque"
				}
			},
			"TH": {
				"value": "69518555",

				"tooltip": {
					"content": "Thaïlande"
				}
			},
			"TL": {
				"value": "1175880",

				"tooltip": {
					"content": "Timor oriental"
				}
			},
			"TG": {
				"value": "6154813",

				"tooltip": {
					"content": "Togo"
				}
			},
			"TO": {
				"value": "104509",

				"tooltip": {
					"content": "Tonga"
				}
			},
			"TT": {
				"value": "1346350",

				"tooltip": {
					"content": "Trinité et Tobago"
				}
			},
			"TN": {
				"value": "10673800",

				"tooltip": {
					"content": "Tunisie"
				}
			},
			"TM": {
				"value": "5105301",

				"tooltip": {
					"content": "Turkménistan"
				}
			},
			"TR": {
				"value": "73639596",

				"tooltip": {
					"content": "Turquie"
				}
			},
			"TV": {
				"value": "9847",

				"tooltip": {
					"content": "Tuvalu"
				}
			},
			"VU": {
				"value": "245619",

				"tooltip": {
					"content": "Vanuatu"
				}
			},
			"VE": {
				"value": "29278000",

				"tooltip": {
					"content": "Venezuela"
				}
			},
			"VN": {
				"value": "87840000",

				"tooltip": {
					"content": "Viêt-Nam"
				}
			},
			"UA": {
				"value": "45706100",

				"tooltip": {
					"content": "Ukraine"
				}
			},
			"UY": {
				"value": "3368595",

				"tooltip": {
					"content": "Uruguay"
				}
			},
			"YE": {
				"value": "24799880",

				"tooltip": {
					"content": "Yemen"
				}
			},
			"ZM": {
				"value": "13474959",

				"tooltip": {
					"content": "Zambie"
				}
			},
			"ZW": {
				"value": "12754378",

				"tooltip": {
					"content": "Zimbabwe"
				}
			}
		}
	});
	
	$maparea.on("mousewheel", function(e) {
		if (e.deltaY > 0)
			$maparea.trigger("zoom", $maparea.data("zoomLevel") + 1);
		else
			$maparea.trigger("zoom", $maparea.data("zoomLevel") - 1);
			
		return false;
	});


});
