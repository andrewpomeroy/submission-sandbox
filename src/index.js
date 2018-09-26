import angular from 'angular';
import 'angular-sanitize';
import 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-sanitize';
import 'angular-animate';

import submissionTabs from './components/submission-tabs.js';
import submissionTab from './components/submission-tab.js';

import './scss/index.scss';

var MyApp = angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])
  .component('submissionTab', submissionTab)
  .component('submissionTabs', submissionTabs);

MyApp.controller('DemoCtrl', DemoCtrl);
DemoCtrl.$inject = ['$scope', '$timeout', '$interpolate', '$q'];
function DemoCtrl($scope, $timeout, $interpolate, $q) {
  $scope.hello = "Ho!"
}