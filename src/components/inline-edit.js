import template from "./inline-edit.html";

const InlineEdit = {
  template: template,
  bindings: {
    value: "<"
  },
  controller: InlineEditCtrl,
  transclude: true
};

InlineEditCtrl.$inject = ["$transclude"];
function InlineEditCtrl($transclude) {
  var $ctrl = this;

  this.$onInit = function() {
    $transclude((clone) => {
      $ctrl.hasTranscludedContent = Boolean(Object.keys(clone).length);
    });
  };

}

export default InlineEdit;
