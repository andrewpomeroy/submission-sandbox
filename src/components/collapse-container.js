import template from "./collapse-container.html";

const CollapseContainer = {
  template: template,
  bindings: {
    isExpanded: "<"
  },
  transclude: {
    "collapseContainerHeading": "?collapseContainerHeading",
    "collapseContainerContent": "?collapseContainerContent"
  },
  controller: CollapseContainerController,
};

CollapseContainerController.$inject = [];

function CollapseContainerController() {

  var $ctrl = this;

  this.toggle = function () {
    $ctrl.isExpanded = !$ctrl.isExpanded;
  };

  this.$onInit = function() {
  };
}

export default CollapseContainer;
