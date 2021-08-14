(function(){


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controller',
  'myApp.controllerListenImages',
  'myApp.controllerLexiconFr',
  'myApp.controllerLexiconEn',
  'myApp.controllerListenImagesEn',
  'myApp.controllerListenSyllables',
  'myApp.controllerListenWords',
  'myApp.controllerListenLetters',
  'myApp.controllerListenAlphabet',
  'myApp.controllerReadLetters',
  'myApp.controllerReadWords',
  'myApp.controllerWordImage',
  'myApp.controllerImageWord',
  'myApp.controllerWordFlag',
  'myApp.controllerFlagDiscovery',
  'myApp.controllerReadSyllables',
  'myApp.controllerWriteSyllables',
  'myApp.controllerWriteLetters',
  'myApp.controllerWriteWords',
  'myApp.controllerWriteImages',
  'myApp.controllerWriteCountries',
  'myApp.controllerListenNumbers',
  'myApp.controllerReadNumbers',
  'myApp.controllerWriteNumbers',
  'myApp.controllerListenLineNumbers',
  'myApp.controllerListenTableNumbers',
  'myApp.controllerListenFamilyNumbers',
  'myApp.controllerCalculAdditions',
  'myApp.controllerCalculSoustractions',
  'myApp.controllerTablesAddition',
  'myApp.controllerTablesMultiplication',
  'myApp.controllerOverview',
  'ngDragDrop',
  'ngTouch'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html'});
	$routeProvider.when('/listenImages', {templateUrl: 'partials/listen-images.html', controller: 'CtrlListenImages'});
	$routeProvider.when('/lexiconFr', {templateUrl: 'partials/lexicon-fr.html', controller: 'CtrlLexiconFr'});
	$routeProvider.when('/lexiconEn', {templateUrl: 'partials/lexicon-en.html', controller: 'CtrlLexiconEn'});
	$routeProvider.when('/listenImagesEn', {templateUrl: 'partials/listen-images-en.html', controller: 'CtrlListenImagesEn'});
	$routeProvider.when('/listenSyllables', {templateUrl: 'partials/listen-syllables.html', controller: 'CtrlListenSyllables'});
	$routeProvider.when('/listenWords', {templateUrl: 'partials/listen-words.html', controller: 'CtrlListenWords'});
	$routeProvider.when('/listenLetters', {templateUrl: 'partials/listen-letters.html', controller: 'CtrlListenLetters'});
	$routeProvider.when('/listenAlphabet', {templateUrl: 'partials/listen-alphabet.html', controller: 'CtrlListenAlphabet'});
	$routeProvider.when('/readSyllables', {templateUrl: 'partials/read-syllables.html', controller: 'CtrlReadSyllables'});
	$routeProvider.when('/readLetters', {templateUrl: 'partials/read-letters.html', controller: 'CtrlReadLetters'});
	$routeProvider.when('/readWords', {templateUrl: 'partials/read-words.html', controller: 'CtrlReadWords'});
	$routeProvider.when('/wordImage', {templateUrl: 'partials/word-image.html', controller: 'CtrlWordImage'});
	$routeProvider.when('/imageWord', {templateUrl: 'partials/image-word.html', controller: 'CtrlImageWord'});
	$routeProvider.when('/wordFlag', {templateUrl: 'partials/word-flag.html', controller: 'CtrlWordFlag'});
	$routeProvider.when('/flagDiscovery', {templateUrl: 'partials/flag-discovery.html', controller: 'CtrlFlagDiscovery'});
	$routeProvider.when('/listenNumbers', {templateUrl: 'partials/listen-numbers.html', controller: 'CtrlListenNumbers'});
	$routeProvider.when('/readNumbers', {templateUrl: 'partials/read-numbers.html', controller: 'CtrlReadNumbers'});
	$routeProvider.when('/writeNumbers', {templateUrl: 'partials/write-numbers.html', controller: 'CtrlWriteNumbers'});
	$routeProvider.when('/listenLineNumbers', {templateUrl: 'partials/listen-line-numbers.html', controller: 'CtrlListenLineNumbers'});
	$routeProvider.when('/listenTableNumbers', {templateUrl: 'partials/listen-table-numbers.html', controller: 'CtrlListenTableNumbers'});
	$routeProvider.when('/listenFamilyNumbers', {templateUrl: 'partials/listen-family-numbers.html', controller: 'CtrlListenFamilyNumbers'});
	$routeProvider.when('/writeSyllables', {templateUrl: 'partials/write-syllables.html', controller: 'CtrlWriteSyllables'});
	$routeProvider.when('/writeLetters', {templateUrl: 'partials/write-letters.html', controller: 'CtrlWriteLetters'});
	$routeProvider.when('/writeWords', {templateUrl: 'partials/write-words.html', controller: 'CtrlWriteWords'});
	$routeProvider.when('/writeCountries', {templateUrl: 'partials/write-countries.html', controller: 'CtrlWriteCountries'});
	$routeProvider.when('/writeImages', {templateUrl: 'partials/write-images.html', controller: 'CtrlWriteImages'});
	$routeProvider.when('/calculAdditions', {templateUrl: 'partials/calcul-additions.html', controller: 'CtrlCalculAdditions'});
	$routeProvider.when('/calculSoustractions', {templateUrl: 'partials/calcul-soustractions.html', controller: 'CtrlCalculSoustractions'});
	$routeProvider.when('/tablesAddition', {templateUrl: 'partials/tables-addition.html', controller: 'CtrlTablesAddition'});
	$routeProvider.when('/tablesMultiplication', {templateUrl: 'partials/tables-multiplication.html', controller: 'CtrlTablesMultiplication'});
	$routeProvider.when('/overview', {templateUrl: 'partials/overview.html', controller: 'CtrlOverview'});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

})();
