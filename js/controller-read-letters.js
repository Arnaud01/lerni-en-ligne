(function(){  // anonymous wrapper : rien n'a besoin d'être global

	var app = angular.module('myApp.controllerReadLetters',[]);

	app.controller('CtrlReadLetters', function($scope, $http, $localStorage) {

	$scope.$storage = $localStorage;

	$('#bravo').css('visibility', 'hidden');
	$('#bloc-central').hide();
	$('#bilan').hide();

$http.get('data/lettres.json').success(function(data) {
   $scope.lettres = data;
});


	$scope.prenoms = $localStorage.prenoms;

	// _________________test si la variable prenomLireLettres existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

			$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']]; // lecture

			}


		// -------------------------- fonctions ------------------------------------------//

		$scope.hear = function() {

			var audio = document.createElement('audio');

			var source= document.createElement('source');

			if (audio.canPlayType('audio/ogg;')) {
				source.type= 'audio/ogg';
				source.src= 'sounds/lettres/' + $scope.lettres[$scope.serie][$scope.n] + '.ogg';

			} else {
				source.type= 'audio/mpeg';
				source.src= 'sounds/lettres/' + $scope.lettres[$scope.serie][$scope.n] + '.mp3';
			}

			audio.appendChild(source);

			audio.play();

		}

		var shuffleArray = function(array) {
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

		$scope.serie_aleatoire = $scope.lettres[serie].slice();	 // on duplique les mots humains de la séries rel

		shuffleArray($scope.serie_aleatoire);

		$scope.l = $scope.lettres[serie].length; // le nombre de syllabes dans la série

		$scope.n = 0;

		$scope.k = 0;

		$scope.nbErreur = 0;

		$scope.s = ''; // s à erreur dans le bilan ex : 0 erreur , 3 erreurs

		$scope.score = 0;

		$('#bloc-central').show();

		$scope.serie = serie;

		$scope.ligne = ligne;

		// alert(ligne);

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

		$scope.next = function() { // --------------fonction next()

		if ($scope.ecriture === "majuscule") { 
			$scope.ecriture = "attache";
			$scope.ligne ++;
		}


		else if ($scope.ecriture === "attache") { 
			$scope.ecriture = "script";
			$scope.ligne ++;
		}

		else if ($scope.ecriture === "script") { 
			$scope.ecriture = "majuscule";
			$scope.ligne ++;
			$scope.serie ++;
		}

		$scope.initialise($scope.serie,$scope.ligne,$scope.ecriture);

	}


		$scope.check = function(reponse) { // --------------------- fonction check()

			$scope.reponseEleve = reponse;

			$scope.resultat = $scope.lettres[$scope.serie][$scope.n];


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

		if ($scope.k==$scope.l) {
			// fin de la série : bilan

			// $scope.note = $scope.score / $scope.k * 10 - $scope.nbErreur ;

		$scope.tauxReussite = $scope.score / $scope.k * 10;

		$scope.tauxErreur = $scope.nbErreur / $scope.k * 10;

		$scope.note = $scope.tauxReussite - $scope.tauxErreur ;

		// alert($scope.note);

			$('#bloc-central').hide();
			$('#bravo').css('visibility', 'hidden');
			$('#bilan').show();
			$('#next').focus();

			if ($scope.nbErreur > 1) {
				$scope.s = 's';
			}

			if ($scope.note == 10) { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres[$scope.ligne] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireLettres = [];

				$scope.prenomLireLettres[$scope.ligne] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // mise à jour

			}

			}

			else if ($scope.note >= 0) { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres[$scope.ligne] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireLettres = [];

				$scope.prenomLireLettres[$scope.ligne] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // mise à jour

			}

			}

			else if ($scope.note > -5) { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres[$scope.ligne] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireLettres = [];

				$scope.prenomLireLettres[$scope.ligne] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // mise à jour

			}

			}

			else  { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';

				$scope.prenomLireLettres = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomLireLettres != 'undefined') { // si la variable prenoms existe

				$scope.prenomLireLettres[$scope.ligne] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomLireLettres = [];

				$scope.prenomLireLettres[$scope.ligne] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomLireLettres; // mise à jour

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
		$scope.prenomCompile = $scope.prenomActuel + '-lireLettres';
		$localStorage[$scope['prenomCompile']] = [];
		$scope.prenomLireLettres = [];
	}

});


})();
