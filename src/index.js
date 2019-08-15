import "@babel/polyfill";

import angular from "angular";
import "angular-sanitize";
import "angular-material";
import "angular-messages";
import "angular-aria";
import "angular-sanitize";
import "angular-animate";

import Moment from "moment";

import faker from "faker";

import submissionTabsVertical from "./components/submission-tabs-vertical";
import submissionTabVertical from "./components/submission-tab-vertical";
import submissionTabs from "./components/submission-tabs";
import submissionTab from "./components/submission-tab";
import tabsWrapper from "./components/tabs-wrapper";
import pillTabs from "./components/pill-tabs";
import pillTab from "./components/pill-tab";
import collapseContainer from "./components/collapse-container";
import getStaticAssetsSvg from "./components/get-static-assets-svg";
import stepSegments from "./components/step-segments";
import stepMenu from "./components/step-menu";
import modalSelectMenu from "./components/modal-select-menu";
import inlineEdit from "./components/inline-edit";

import toastTemplate from "./templates/toast.html";

import "./scss/index.scss";
import "angular-material/angular-material.css";

var MyApp = angular
  .module("MyApp", ["ngMaterial", "ngMessages", "ngSanitize"])
  .component("submissionTabsVertical", submissionTabsVertical)
  .component("submissionTabVertical", submissionTabVertical)
  .component("submissionTabs", submissionTabs)
  .component("submissionTab", submissionTab)
  .component("tabsWrapper", tabsWrapper)
  .component("pillTabs", pillTabs)
  .component("pillTab", pillTab)
  .component("collapseContainer", collapseContainer)
  .component("getStaticAssetsSvg", getStaticAssetsSvg)
  .component("stepSegments", stepSegments)
  .component("stepMenu", stepMenu)
  .component("modalSelectMenu", modalSelectMenu)
  .component("inlineEdit", inlineEdit);

MyApp.controller("DemoCtrl", DemoCtrl);
DemoCtrl.$inject = ["$scope", "$timeout", "$interpolate", "$q", "$mdToast"];
function DemoCtrl($scope, $timeout, $interpolate, $q, $mdToast) {
  
  $scope.faker = faker;
  $scope.fake = faker.fake;
  
  $scope.toast = function () {
    $mdToast.show({
      hideDelay: false,
      position: "bottom right",
      controller: "ToastCtrl",
      template: toastTemplate,
      // templateUrl: "./templates/toast.html",
      autoWrap: false
    });
  };

  $scope.testItems = [
    {
      name: "Something",
      isGenerated: Math.round(Math.random()),
      author: faker.name.findName(),
      date: Moment(faker.date.past()).format("MM/DD/YYYY")
    },
    {
      name: "Something Else",
      isGenerated: Math.round(Math.random()),
      author: faker.name.findName(),
      date: Moment(faker.date.past()).format("MM/DD/YYYY")
    },
    {
      name: "Hello Hello",
      isGenerated: Math.round(Math.random()),
      author: faker.name.findName(),
      date: Moment(faker.date.past()).format("MM/DD/YYYY")
    },
    {
      name: "Something Else",
      isGenerated: Math.round(Math.random()),
      author: faker.name.findName(),
      date: Moment(faker.date.past()).format("MM/DD/YYYY")
    },
    {
      name: "Cursus Venenatis Sit Mattis Fusce",
      isGenerated: Math.round(Math.random()),
      author: faker.name.findName(),
      date: Moment(faker.date.past()).format("MM/DD/YYYY")
    },
  ];

  const stageTemplate = [
    {
      title: "Elit et voluptate in excepteur adipisicing laborum consequat excepteur ullamco fugiat ut magna ipsum",
      assignee: "Andrew Pomeroy",
      completedDate: "4/5/18"
    },
    {
      title: "Occaecat magna commodo sit minim officia voluptate cillum irure commodo",
    },
    {
      title: "Ullamco incididunt deserunt officia enim velit incididunt proident ad esse",
      assignee: "Tom Brown",
      completedDate: "1/14/18"
    }
  ];


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
  };

  $scope.tabs = [
    {
      name: "all",
      displayName: "All",
    },
    {
      name: "systemGenerated",
      displayName: "System-Generated",
      filterFn: (item) => item.isGenerated,
    },
    {
      name: "processorGenerated",
      displayName: "Added by Processor",
      filterFn: (item) => !item.isGenerated,
    },
    {
      name: "placeholder",
      displayName: "placeholder",
      filterFn: () => !1
    }
  ];

  // const makeFakeMetaItem = (key, index) => ({
  //   label: key,
  //   value: (faker.commerce[key])()
  // });
  // $scope.fakeMeta = Object.keys(faker.commerce).map((key, index) => makeFakeMetaItem(key, index));
  const makeFakeMetaItem = () => ({
    label: faker.commerce.department(),
    value: Math.floor(Math.random() * 1.55) ? faker.commerce.productName() : faker.commerce.price()
  });
  $scope.fakeMeta = [];
  for (let index = 0; index < Math.floor(Math.random() * 5) + 5; index++) {
    console.log(Math.floor(Math.random() * 1.25));
    $scope.fakeMeta.push(makeFakeMetaItem());
  }

}

MyApp.controller("ToastCtrl", ["$scope", "$mdToast", "$mdDialog", function ($scope, $mdToast, $mdDialog) {

  var isDlgOpen;
  
  $scope.closeToast = function () {
    if (isDlgOpen) return;

    $mdToast
      .hide()
      .then(function () {
        isDlgOpen = false;
      });
  };

  $scope.openMoreInfo = function (e) {
    if (isDlgOpen) return;
    isDlgOpen = true;

    $mdDialog
      .show($mdDialog
        .alert()
        .title("More info goes here.")
        .textContent("Something witty.")
        .ariaLabel("More info")
        .ok("Got it")
        .targetEvent(e)
      )
      .then(function () {
        isDlgOpen = false;
      });
  };
}]);