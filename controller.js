var AniCredits = angular.module('AniCredits', []);

AniCredits.controller('DisplayPanel', function ($scope) {
  $scope.events = [
    {'title': 'Ozine Fest 2015','credit': 'SMX Manila, Pasay City'},
    {'title': 'Tamashii Convention','credit': 'SMX Manila, Pasay City'}
  ];
  $scope.title = "World";
});
