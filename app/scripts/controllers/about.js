'use strict';

/**
 * @ngdoc function
 * @name selfStatsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the selfStatsApp
 */
angular.module('selfStatsApp')
  .controller('AboutCtrl', function ($scope, $state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($state);
  });
