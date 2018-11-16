import 'babel-polyfill';

import angular from 'angular';
import 'angular-sanitize';
import 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-sanitize';
import 'angular-animate';

import faker from 'faker';

import submissionTabsVertical from './components/submission-tabs-vertical';
import submissionTabVertical from './components/submission-tab-vertical';
import submissionTabs from './components/submission-tabs';
import submissionTab from './components/submission-tab';
import tabsWrapper from './components/tabs-wrapper';
import pillTabs from './components/pill-tabs';
import pillTab from './components/pill-tab';
import collapseContainer from './components/collapse-container';
import getSvg from './components/get-svg';
import stepSegments from './components/step-segments';

import './scss/index.scss';
import 'angular-material/angular-material.css';

var MyApp = angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])
  .component('submissionTabsVertical', submissionTabsVertical)
  .component('submissionTabVertical', submissionTabVertical)
  .component('submissionTabs', submissionTabs)
  .component('submissionTab', submissionTab)
  .component('tabsWrapper', tabsWrapper)
  .component('pillTabs', pillTabs)
  .component('pillTab', pillTab)
  .component('collapseContainer', collapseContainer)
  .component('getSvg', getSvg)
  .component('stepSegments', stepSegments)

MyApp.controller('DemoCtrl', DemoCtrl);
DemoCtrl.$inject = ['$scope', '$timeout', '$interpolate', '$q', '$mdToast'];
function DemoCtrl($scope, $timeout, $interpolate, $q, $mdToast) {
  
  $scope.faker = faker;
  $scope.fake = faker.fake;

  $scope.toast = function () {
    var toast = $mdToast.simple()
      .textContent('Marked as read')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      // .position(pinTo);

    $mdToast.show(toast).then(function (response) {
      if (response == 'ok') {
        alert('You clicked the \'UNDO\' action.');
      }
    });
  }

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

  const stageTemplate = [
    {
      title: 'Elit et voluptate in excepteur adipisicing laborum consequat excepteur ullamco fugiat ut magna ipsum',
      assignee: 'Andrew Pomeroy',
      completedDate: '4/5/18'
    },
    {
      title: 'Occaecat magna commodo sit minim officia voluptate cillum irure commodo',
    },
    {
      title: 'Ullamco incididunt deserunt officia enim velit incididunt proident ad esse',
      assignee: 'Tom Brown',
      completedDate: '1/14/18'
    }
  ]


  let stages = [];
  for (let index = 0; index < 6; index++) {
    stages.push([]);
    let len = stageTemplate.length;
    let getRand = () => Math.round(Math.random() * (len - 1));
    for (let innerIndex = 0; innerIndex < (Math.round(Math.random() * 4) + 1); innerIndex++) {
      const newObj = {
        title: stageTemplate[getRand()].title,
        assignee: stageTemplate[getRand()].assignee,
        completedDate: stageTemplate[getRand()].completedDate,
        isCompleted: Boolean(Math.round(Math.random()))
      };
      stages[index].push(newObj);
    }
  }

  $scope.stages = stages;

  
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