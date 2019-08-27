import template from "./inline-edit-date.html";

const InlineEditDate = {
  template: template,
  bindings: {
    date: "<",
    onCommit: "<"
  },
  controller: InlineEditDateCtrl,
  transclude: true
};

InlineEditDateCtrl.$inject = ["$transclude", "$element", "$timeout"];
function InlineEditDateCtrl($transclude, $element, $timeout) {
  var $ctrl = this;

  $ctrl.openDateDialog = () => $ctrl.dialogIsOpen = true;

  $ctrl.onSelect = (value) => {
    $ctrl.onCommit(value);
  };
  $ctrl.onClose = () => {
    $ctrl.dialogIsOpen = false;
  };

}

export default InlineEditDate;
