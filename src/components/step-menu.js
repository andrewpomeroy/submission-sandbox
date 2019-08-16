import template from "./step-menu.html";
import faker from "faker";

const StepMenu = {
  template: template,
  bindings: {
    step: "<",
    onReassign: "<",
    onDelete: "<",
    onToggleComplete: "<"
  },
  controller: StepMenuController
};

function StepMenuController() {
  var $ctrl = this;

  this.openReassignDialog = function (step, $event) {
    $ctrl.reassignActive = true;
    $ctrl.$reassignEvent = $event;
  };

  this.reassign = (user) => {
    $ctrl.reassignActive = false;
  };

  this.reassignUserItemDisplayFn = (item) => item.displayName;
  this.reassignUserIsSelectedFn = (user) => user.isAssigned;

  this.$onInit = function() {
    $ctrl.users = [];
    // create fake "users" list
    for (let index = 0; index < (Math.floor(Math.random() * 20) + 50); index++) {
      $ctrl.users.push({ displayName: faker.name.findName() });
    }
    // Mock effect of designating one user as current assignee
    const int = Math.floor(Math.random() * $ctrl.users.length);
    $ctrl.users[int].isAssigned = true;
  };

}

export default StepMenu;
