import angular from 'angular';
import 'angular-sanitize';
import 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-sanitize';
import 'angular-animate';

import faker from 'faker';

import submissionTabs from './components/submission-tabs';
import submissionTab from './components/submission-tab';
import tabsWrapper from './components/tabs-wrapper';
import pillTabs from './components/pill-tabs';
import pillTab from './components/pill-tab';

import './scss/index.scss';

var MyApp = angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])
  .component('submissionTab', submissionTab)
  .component('submissionTabs', submissionTabs)
  .component('tabsWrapper', tabsWrapper)
  .component('pillTabs', pillTabs)
  .component('pillTab', pillTab)

MyApp.controller('DemoCtrl', DemoCtrl);
DemoCtrl.$inject = ['$scope', '$timeout', '$interpolate', '$q'];
function DemoCtrl($scope, $timeout, $interpolate, $q) {
  
  $scope.faker = faker;
  $scope.fake = faker.fake;

  $scope.testItems = [
    {
      name: "Something",
      generated: true
    },
    {
      name: "Something Else",
      generated: false
    }
  ];

  $scope.filters = {
    systemGenerated: (item) => item.generated,
    processorGenerated: (item) => !item.generated
  }

}