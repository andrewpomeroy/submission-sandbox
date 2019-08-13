import template from "./step-menu.html";
import faker from "faker";

const StepMenu = {
  template: template,
  bindings: {
    step: "<",
  },
  controller: StepMenuController
};

StepMenuController.$inject = ["$mdDialog"];

function StepMenuController($mdDialog) {
  var $ctrl = this;
  $ctrl.reassignDialogId = "reassignDialog" + Math.floor(Math.random() * 1000);

  this.reassign = function ($event, step) {
    $mdDialog.show({
      contentElement: "#" + $ctrl.reassignDialogId,
      // parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true,
    });
  };


  this.$onInit = function() {
    $ctrl.users = [];
    for (let index = 0; index < (Math.floor(Math.random() * 15) + 5); index++) {
      $ctrl.users.push({ username: faker.name.findName() });
    }
  }; 
}

export default StepMenu;
