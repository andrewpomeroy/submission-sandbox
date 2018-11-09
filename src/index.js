import 'babel-polyfill';

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
import collapseContainer from './components/collapse-container';
import getSvg from './components/get-svg';

import './scss/index.scss';
import 'angular-material/angular-material.css';

var MyApp = angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])
  .component('submissionTab', submissionTab)
  .component('submissionTabs', submissionTabs)
  .component('tabsWrapper', tabsWrapper)
  .component('pillTabs', pillTabs)
  .component('pillTab', pillTab)
  .component('collapseContainer', collapseContainer)
  .component('getSvg', getSvg)

MyApp.controller('DemoCtrl', DemoCtrl);
DemoCtrl.$inject = ['$scope', '$timeout', '$interpolate', '$q'];
function DemoCtrl($scope, $timeout, $interpolate, $q) {
  
  $scope.faker = faker;
  $scope.fake = faker.fake;

  $scope.testItems = [
    {
      name: "Something",
      isGenerated: true
    },
    {
      name: "Something Else",
      isGenerated: false
    }
  ];

  
  $scope.filters = {
    systemGenerated: (item) => item.isGenerated,
    processorGenerated: (item) => !item.isGenerated,
    placeholder: () => !1
  }

  $scope.tabs = [
    {
      name: 'all',
      displayName: "All",
    },
    {
      name: 'systemGenerated',
      displayName: "System-Generated",
      filterFn: (item) => item.isGenerated,
    },
    {
      name: 'processorGenerated',
      displayName: "Added by Processor",
      filterFn: (item) => !item.isGenerated,
    },
    {
      name: 'placeholder',
      displayName: "placeholder",
      filterFn: () => !1
    }
  ]

}