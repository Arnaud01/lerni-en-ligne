(function(){   // anonymous wrapper : rien n'a besoin d'être global

	var app = angular.module('myApp.controllerOverview',[]);

	app.controller('CtrlOverview', function($scope, $http, $localStorage) {

	$scope.$storage = $localStorage;


	$('#bravo').css('visibility', 'hidden');
	$('#bloc-central').hide();
	$('#bilan').hide();

	$http.get('data/syllabes.json').success(function(data) { // récupère les données json
	   $scope.syllabes = data;
	});

	$http.get('data/mots.json').success(function(data) {
	   $scope.mots = data;
	});

	$http.get('data/lettres.json').success(function(data) {
	   $scope.lettres = data;
	});

	$http.get('data/nombres.json').success(function(data) {
	   $scope.nombres = data;
	});

	$http.get('data/mot-image.json').success(function(data) {
	   $scope.motimage = data;
	});

	$http.get('data/additions.json').success(function(data) {
	   $scope.additions = data;
	});

	$http.get('data/soustractions.json').success(function(data) {
	   $scope.soustractions = data;
	});

	$http.get('data/tables-addition.json').success(function(data) {
	   $scope.tablesaddition = data;
	});

	$http.get('data/tables-multiplication.json').success(function(data) {
	   $scope.tablesmultiplication = data;
	});

	$http.get('data/images.json').success(function(data) {
	   $scope.images = data;
	});

	$http.get('data/images-en.json').success(function(data) {
	   $scope.imagesen = data;
	});

	$scope.prenoms = $localStorage.prenoms;

	// _________________test si la variable prenomLireSyllabes existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';

			$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireSyllabes != 'undefined') { // si la variable prenoms existe

			$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']]; // lecture


			}

			// _________________test si la variable prenomEcrireSyllabes existe _____________________//

					$scope.prenomCompile = $scope.prenomActuel + '-ecrireSyllabes';

					$scope.prenomEcrireSyllabes = $localStorage[$scope['prenomCompile']];


					if (typeof $scope.prenomEcrireSyllabes != 'undefined') { // si la variable prenoms existe

					$scope.prenomEcrireSyllabes = $localStorage[$scope['prenomCompile']]; // lecture

					}



	// _________________test si la variable prenomLireMots existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lireMots';

			$scope.prenomLireMots = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireMots != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireMots = $localStorage[$scope['prenomCompile']]; // lecture

			}



// _________________test si la variable prenomEcrireMots existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-ecrireMots';

		$scope.prenomEcrireMots = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomEcrireMots != 'undefined') { // si la variable prenoms existe

		$scope.prenomEcrireMots = $localStorage[$scope['prenomCompile']]; // lecture

		}


	// _________________test si la variable prenomMotImage existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-motImage';

			$scope.prenomMotImage = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotImage != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotImage = $localStorage[$scope['prenomCompile']]; // lecture

			}


	// _________________test si la variable prenomEcrireImages existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-ecrireImages';

			$scope.prenomEcrireImages = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomEcrireImages != 'undefined') { // si la variable prenoms existe

			$scope.prenomEcrireImages = $localStorage[$scope['prenomCompile']]; // lecture

			}




	// _________________test si la variable prenomLireLettres existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

			$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']]; // lecture

			}



// _________________test si la variable prenomEcrireLettres existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-ecrireLettres';

		$scope.prenomEcrireLettres = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomEcrireLettres != 'undefined') { // si la variable prenoms existe

		$scope.prenomEcrireLettres = $localStorage[$scope['prenomCompile']]; // lecture

		}

// _________________test si la variable prenomLireNombres existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-lireNombres';

		$scope.prenomLireNombres = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomLireNombres != 'undefined') { // si la variable prenoms existe

		$scope.prenomLireNombres = $localStorage[$scope['prenomCompile']]; // lecture

		//	$scope.prenomLireNombres = ['green','yellow','orange','red','orange','green','yellow','red','orange',true,false,true,true,false,false,true,false,false,false,true,false,true,true,false,false,true,false,false,false,true];

		}

// _________________test si la variable prenomEcrireNombres existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-ecrireNombres';

		$scope.prenomEcrireNombres = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomEcrireNombres != 'undefined') { // si la variable prenoms existe

		$scope.prenomEcrireNombres = $localStorage[$scope['prenomCompile']]; // lecture

		}


		// _________________test si la variable prenomCalculAdditions existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-calculAdditions';

		$scope.prenomCalculAdditions = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomCalculAdditions != 'undefined') { // si la variable prenoms existe

		$scope.prenomCalculAdditions = $localStorage[$scope['prenomCompile']]; // lecture

		}

		// _________________test si la variable prenomCalculSoustractions existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-calculSoustractions';

		$scope.prenomCalculSoustractions = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomCalculSoustractions != 'undefined') { // si la variable prenoms existe

		$scope.prenomCalculSoustractions = $localStorage[$scope['prenomCompile']]; // lecture

		}

		// _________________test si la variable prenomTablesAddition existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-tablesAddition';

		$scope.prenomTablesAddition = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomTablesAddition != 'undefined') { // si la variable prenoms existe

		$scope.prenomTablesAddition = $localStorage[$scope['prenomCompile']]; // lecture

		}

		// _________________test si la variable prenomTablesMultiplication existe _____________________//

		$scope.prenomCompile = $scope.prenomActuel + '-tablesMultiplication';

		$scope.prenomTablesMultiplication = $localStorage[$scope['prenomCompile']];


		if (typeof $scope.prenomTablesMultiplication != 'undefined') { // si la variable prenoms existe

		$scope.prenomTablesMultiplication = $localStorage[$scope['prenomCompile']]; // lecture

		}

	// _________________test si la variable prenomLexiqueFr existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lexiqueFr';

			$scope.prenomLexiqueFr = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLexiqueFr != 'undefined') { // si la variable prenoms existe

			$scope.prenomLexiqueFr = $localStorage[$scope['prenomCompile']]; // lecture

			}

	// _________________test si la variable prenomLexiqueEn existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lexiqueEn';

			$scope.prenomLexiqueEn = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLexiqueEn != 'undefined') { // si la variable prenoms existe

			$scope.prenomLexiqueEn = $localStorage[$scope['prenomCompile']]; // lecture

			}


		// -------------------------- fonctions ------------------------------------------//

		$scope.hear = function() {

			var audio = document.createElement('audio');

			var source= document.createElement('source');

			if (audio.canPlayType('audio/ogg;')) {
				source.type= 'audio/ogg';
				source.src= 'sounds/syllabes/' + $scope.syllabes[$scope.serie][$scope.n] + '.ogg';

			} else {
				source.type= 'audio/mpeg';
				source.src= 'sounds/syllabes/' + $scope.syllabes[$scope.serie][$scope.n] + '.mp3';
			}

			audio.appendChild(source);

			audio.play();

		}

	var shuffleArray = function(array) { // Mélange un tableau
		var m = array.length, t, i;

		// While there remain elements to shuffle
		while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
		}
		return array;
	}


		$scope.initialise = function(serie,ligne,ecriture) { // ---------------------- fonction initialise()

		$('#bravo').css('visibility', 'hidden');
		$('#bilan').hide();

		$scope.serie_aleatoire = $scope.syllabes[serie].slice();	 // on duplique les mots humains de la série

		shuffleArray($scope.serie_aleatoire);

		$scope.l = $scope.syllabes[serie].length; // le nombre de syllabes dans la série

		$scope.n = 0;

		$scope.k = 0;

		$scope.nbErreur = 0;

		$scope.tauxReussite = '';

		$scope.tauxErreur = '';

		$scope.s = ''; // s à erreur dans le bilan ex : 0 erreur , 3 erreurs

		$scope.score = 0;

		$('#bloc-central').show();

		$scope.serie = serie;

		$scope.ligne = ligne;

		$scope.ecriture = ecriture;

		$scope.display();

	}


		$scope.display = function(paramAlertSuccess) { // --------------fonction display()

		if (paramAlertSuccess===true) { // si on vient de réussir, affichage Alert Success

			$('#bravo').css('visibility', 'visible');
		}

		$scope.hear();

		$('#reponse').focus();

	}


		$scope.check = function(reponse) { // --------------------- fonction check()

			$scope.reponseEleve = reponse;

			$scope.resultat = $scope.syllabes[$scope.serie][$scope.n];


			if (reponse===$scope.resultat) { // si c'est juste

				$('#bravo').css('visibility', 'visible');
				$('#erreur').css('visibility', 'hidden');

				$scope.score ++;

				$scope.decide(true);

			}

			else { // si erreur

				$('#modalError').modal('show');

				$('#bravo').css('visibility', 'hidden');

				$('#modalError').on('shown.bs.modal', function () { // lorsque le modal est affiché
					$('#refaire').focus();
				});

				$scope.nbErreur ++;

			}
			$scope.reponse = '';
			$('#reponse').focus();
	}

		$scope.decide = function(param) { // --------------------- fonction decide()

		$scope.k ++;

		$scope.n ++;

		//alert($scope.nbErreur);

		//alert($scope.k);

		//alert($scope.n);



		if ($scope.k==$scope.l) {
			// fin de la série : bilan


					/*
		 *
		 *
		 *
		 *
		 * mode de calcul de la note :


	nb réussi / nb de syllabes * 10  - le nombre d'erreur
	*
	* max : 10
	*
	* min : - le nombre d'erreur : ex 54 erreurs : -54


		*/

		// $scope.note = $scope.score / $scope.k * 10 - $scope.nbErreur ;


		$scope.tauxReussite = $scope.score / $scope.k * 10;

		$scope.tauxErreur = $scope.nbErreur / $scope.k * 10;

		$scope.note = $scope.tauxReussite - $scope.tauxErreur ;

		//alert($scope.note);

			$('#bloc-central').hide();
			$('#bravo').css('visibility', 'hidden');
			$('#bilan').show();

			if ($scope.nbErreur > 1) {
				$scope.s = 's';
			}

			// alert($scope.nbErreur);

			if ($scope.note == 10) { // si tout est juste : valider la série

				// alert($scope.ligne);


				$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';

				// $localStorage[$scope['prenomCompile']] = $scope.lireSyllabes;

				$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']];

				// alert($scope.prenomLireSyllabes);


			if (typeof $scope.prenomLireSyllabes != 'undefined') { // si la variable prenoms existe

				// alert('prenom lire syllabes existe');

				$scope.prenomLireSyllabes[$scope.ligne] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireSyllabes = [];

				$scope.prenomLireSyllabes[$scope.ligne] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // mise à jour

			}

			}

			else if ($scope.note >= 0) { // si tout est juste : valider la série

				// alert($scope.ligne);


				$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';

				// $localStorage[$scope['prenomCompile']] = $scope.lireSyllabes;

				$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']];

				// alert($scope.prenomLireSyllabes);


			if (typeof $scope.prenomLireSyllabes != 'undefined') { // si la variable prenoms existe

				// alert('prenom lire syllabes existe');

				$scope.prenomLireSyllabes[$scope.ligne] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireSyllabes = [];

				$scope.prenomLireSyllabes[$scope.ligne] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // mise à jour

			}

			}


			else if ($scope.note > -5) { // si tout est juste : valider la série

				// alert($scope.ligne);


				$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';

				// $localStorage[$scope['prenomCompile']] = $scope.lireSyllabes;

				$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']];

				// alert($scope.prenomLireSyllabes);


			if (typeof $scope.prenomLireSyllabes != 'undefined') { // si la variable prenoms existe

				// alert('prenom lire syllabes existe');

				$scope.prenomLireSyllabes[$scope.ligne] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireSyllabes = [];

				$scope.prenomLireSyllabes[$scope.ligne] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // mise à jour

			}

			}

			else { // si tout est juste : valider la série

				// alert($scope.ligne);


				$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';

				// $localStorage[$scope['prenomCompile']] = $scope.lireSyllabes;

				$scope.prenomLireSyllabes = $localStorage[$scope['prenomCompile']];

				// alert($scope.prenomLireSyllabes);


			if (typeof $scope.prenomLireSyllabes != 'undefined') { // si la variable prenoms existe

				// alert('prenom lire syllabes existe');

				$scope.prenomLireSyllabes[$scope.ligne] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireSyllabes = [];

				$scope.prenomLireSyllabes[$scope.ligne] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireSyllabes; // mise à jour

			}

			}

		}
		else {
			if (param===true) { // si on vient de réussir
				$scope.display(true);
			}
			else { // si erreur et clic sur continuer
				$scope.display(false);
			}
		}

	}

	$scope.effacer = function() {
		$scope.prenomCompile = $scope.prenomActuel + '-lireSyllabes';
		$localStorage[$scope['prenomCompile']] = [];
		$scope.prenomLireSyllabes = [];
	}

});

})();
