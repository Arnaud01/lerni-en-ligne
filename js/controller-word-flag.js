(function(){  // anonymous wrapper : rien n'a besoin d'être global

	var app = angular.module('myApp.controllerWordFlag',[]);

	app.controller('CtrlWordFlag', function($scope, $http, $localStorage) {

	$scope.$storage = $localStorage;


	$('#bravo').css('visibility', 'hidden');
	$('#bloc-central').hide();
	$('#bilan').hide();

	$http.get('data/flags.json').success(function(data) {
	   $scope.drapeaux = data;
	});


	$scope.prenoms = $localStorage.prenoms;

	// _________________test si la variable prenomMotDrapeau existe _____________________//

			$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';

			$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotDrapeau != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']]; // lecture

			}


		// -------------------------- fonctions ------------------------------------------//



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

		$scope.initialise = function(serie) { // ---------------------- fonction initialise()

		$('#bravo').css('visibility', 'hidden');
		$('#bilan').hide();

		$scope.serie_aleatoire = $scope.drapeaux[serie].slice();	 // on duplique les mots humains de la séries rel

		shuffleArray($scope.serie_aleatoire);

		$scope.l = $scope.drapeaux[serie].length; // le nombre de mots dans la série

		$scope.n = 0;

		$scope.k = 0;

		$scope.nbErreur = 0;

		$scope.s = ''; // s à erreur dans le bilan ex : 0 erreur , 3 erreurs

		$scope.score = 0;

		$('#bloc-central').show();

		$scope.serie = serie;

		$scope.display();

	}


		$scope.display = function(paramAlertSuccess) { // --------------fonction display()

		if (paramAlertSuccess===true) { // si on vient de réussir, affichage Alert Success

			$('#bravo').css('visibility', 'visible');
		}

		$('#reponse').focus();

	}

		$scope.next = function() { // --------------fonction next()

		$scope.serie ++;

		$scope.initialise($scope.serie);

	}


		$scope.check = function(reponse) { // --------------------- fonction check()

			$scope.reponseEleve = reponse;

			$scope.resultat = $scope.serie_aleatoire[$scope.n].id;


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

				$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';

				$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotDrapeau != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotDrapeau[$scope.serie] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomMotDrapeau = [];

				$scope.prenomMotDrapeau[$scope.serie] = 'green';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // mise à jour

			}

			}

			else if ($scope.note >= 0) { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';

				$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotDrapeau != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotDrapeau[$scope.serie] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomMotDrapeau = [];

				$scope.prenomMotDrapeau[$scope.serie] = 'yellow';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // mise à jour

			}

			}

			else if ($scope.note > -5) { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';

				$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotDrapeau != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotDrapeau[$scope.serie] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomMotDrapeau = [];

				$scope.prenomMotDrapeau[$scope.serie] = 'orange';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // mise à jour

			}

			}

			else  { // si tout est juste : valider la série

				$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';

				$scope.prenomMotDrapeau = $localStorage[$scope['prenomCompile']];


			if (typeof $scope.prenomMotDrapeau != 'undefined') { // si la variable prenoms existe

				$scope.prenomMotDrapeau[$scope.serie] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // écriture


			}
			else { // si la variable prenoms n'existe pas

				// alert('prenom lire syllabes existe pas');

				$scope.prenomMotDrapeau = [];

				$scope.prenomMotDrapeau[$scope.serie] = 'red';

				$localStorage[$scope['prenomCompile']] = $scope.prenomMotDrapeau; // mise à jour

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
		$scope.prenomCompile = $scope.prenomActuel + '-motDrapeau';
		$localStorage[$scope['prenomCompile']] = [];
		$scope.prenomMotDrapeau = [];
	}

});



})();
