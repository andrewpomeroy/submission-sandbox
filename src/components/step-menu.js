import template from "./step-menu.html";
import faker from "faker";

const StepMenu = {
  template: template,
  bindings: {
    step: "<",
  },
  controller: StepMenuController
};

// StepMenuController.$inject = ["$mdDialog"];

function StepMenuController($mdDialog) {
  var $ctrl = this;
  $ctrl.dialogId = "dialog" + Math.floor(Math.random() * 1000);

  // this.reassign = function ($event, step) {
  //   this.reassignDialogForStep = step;
  // }

  this.reassign = function (step, $event) {
    $ctrl.reassignActive = true;
    $ctrl.$reassignEvent = $event;
  };

  this.onReassign = (user) => {
    $ctrl.reassignActive = false;
    console.log(user);
  };

  this.isAssigned = (user) => user.isAssigned;

  this.$onInit = function() {
    // $ctrl.users = [];
    // // create fake "users" list
    // for (let index = 0; index < (Math.floor(Math.random() * 20) + 50); index++) {
    //   $ctrl.users.push({ username: faker.name.findName() });
    // }
    // // Mock effect of designating one user as current assignee
    // const int = Math.floor(Math.random() * $ctrl.users.length);
    // $ctrl.users[int].isAssigned = true;
  };

}

export default StepMenu;
