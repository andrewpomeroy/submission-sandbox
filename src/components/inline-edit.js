import template from "./inline-edit.html";

const InlineEdit = {
  template: template,
  bindings: {
    value: "<",
    onCommit: "<"
  },
  controller: InlineEditCtrl,
  transclude: true
};

InlineEditCtrl.$inject = ["$transclude", "$element", "$timeout"];
function InlineEditCtrl($transclude, $element, $timeout) {
  var $ctrl = this;

  this.onBlur = () => {
    this.confirmEdit();
  };
  this.onOutsideClick = () => {
    this.confirmEdit();
  };

  this.enableEdit = ($event) => {
    $ctrl.isEditing = true; 
    $ctrl.inputModel = $ctrl.value;
    const input = [].slice.call($element.find("input")).filter(x => x.id === "inlineEditInput")[0];
    $timeout(() => input.focus());
  };
  this.confirmEdit = () => {
    $ctrl.isEditing = false;
    if ($ctrl.onCommit) $ctrl.onCommit($ctrl.inputModel);
  };


  this.$onInit = function () {
    $transclude((clone) => {
      $ctrl.hasTranscludedContent = Boolean(Object.keys(clone).length);
    });

    // $element.on("focusout", ($event) => {
    //   console.log("focusout", $event);
    // });
  };
  this.$onDestroy = () => {
    // $element.off("focusout");
  };
}

export default InlineEdit;
