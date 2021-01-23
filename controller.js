newFunction();
function newFunction() {
	var AniCredits = angular.module('AniCredits', []);

	AniCredits.controller('DisplayPanel', function ($scope) {
		$scope.events = [
			{ 'title': 'A Good Librarian Like a Good Shepherd', 'credit': '© 2014 AUGUST /Shirasaki Tsugumi and Stray Lambs', 'site': 'http://www.daito-anime.com/' },
			{ 'title': 'Amagi Brilliant Park', 'credit': '© Kadokawa Corporation 2014', 'site': 'http://amaburi.jp/' },
			{ 'title': 'Gintama', 'credit': '© Shueisha / Sunrise / Bandai Namco Pictures', 'site': 'http://www.tv-tokyo.co.jp/anime/gintama' },
			{ 'title': 'Shouwa Genroku Rakugo Shinjuu', 'credit': '© 雲田はるこ・講談社／落語心中協会', 'site': 'http://rakugo-shinju-anime.jp/' }
		];
		$scope.title = "World";
	});
}

