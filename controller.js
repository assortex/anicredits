newFunction();
function newFunction() {
	var AniCredits = angular.module('AniCredits', []);

	AniCredits.controller('DisplayPanel', function ($scope) {
		$scope.events = [
			{ 'title': 'Shingeki no Kyojin: The Final Season', 'credit': '©諫山創・講談社／「進撃の巨人」The Final Season製作委員会', 'site': 'https://shingeki.tv/final/' },
			{ 'title': 'Yakusoku no Neverland 2nd Season', 'credit': '©SHUEISHA Inc. All rights reserved.', 'site': 'https://www.shonenjump.com/j/sp_neverland' },
			{ 'title': 'Dr. Stone: Stone Wars', 'credit': '©米スタジオ・Boichi／集英社・Dr.STONE製作委員会', 'site': 'https://dr-stone.jp' },
			{ 'title': 'Tensei shitara Slime Datta Ken 2nd Season', 'credit': '©川上泰樹・伏瀬・講談社／転スラ製作委員会', 'site': 'https://www.ten-sura.com/' },
			{ 'title': 'Horimiya', 'credit': '©HERO・萩原ダイスケ／SQUARE ENIX・「ホリミヤ」製作委員会', 'site': 'https://horimiya-anime.com/' },
			{ 'title': 'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2', 'credit': '©長月達平・株式会社KADOKAWA刊／Re:ゼロから始める異世界生活2製作委員会', 'site': 'http://re-zero-anime.jp/' }
		];
		$scope.title = "World";
	});
}

