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

  Object.defineProperties(this, {
    fixedHeight: {
      enumerable: true,
      get: () => $ctrl.isEditing ? $ctrl.height + "px" : "auto"
    },
    fixedWidth: {
      enumerable: true,
      get: () => $ctrl.isEditing ? $ctrl.width + "px" : "auto"
    }
  });

  this.onBlur = () => {
    this.confirmEdit();
  };
  this.onKeyDown = ($event) => {
    $event.stopPropagation();    
    console.log($event.keyCode);
    switch($event.keyCode) {
    case 13:
      this.confirmEdit(true);
      break;
    case 27:
      this.cancelEdit(true);
    }
  };

  this.enableEdit = ($event) => {
    $event.stopPropagation();
    $ctrl.isEditing = true; 
    $ctrl.inputModel = $ctrl.value;
    
    $ctrl.height = $element[0].getBoundingClientRect().height;
    $ctrl.width = $element[0].getBoundingClientRect().width;

    const input = [].slice.call($element.find("input")).filter(x => x.id === "inlineEditInput")[0];
    $timeout(() => input.focus());
  };
  this.confirmEdit = (refocus) => {
    console.log("confirmEdit", refocus);
    if (refocus) $ctrl.refocusContainer();
    $ctrl.closeOutEditMode();
    if ($ctrl.onCommit) $ctrl.onCommit($ctrl.inputModel);
  };
  this.cancelEdit = (refocus) => {
    if (refocus) $ctrl.refocusContainer();
    $ctrl.closeOutEditMode();
  };

  this.closeOutEditMode = () => {
    $ctrl.isEditing = false;
  };
  this.refocusContainer = () => {
    $timeout(() => {
      [].slice.call($element.find("div"))
        .find(x => x.hasAttribute("inline-edit-wrap-element"))
        .focus();
    });
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
