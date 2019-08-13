import template from "./step-menu.html";

const StepMenu = {
  template: template,
  bindings: {
    step: "<",
  },
  controller: StepMenuController
};

StepMenuController.$inject = [];

function StepMenuController() {
  var $ctrl = this;

  this.$onInit = function() {
  }; 
}

export default StepMenu;
