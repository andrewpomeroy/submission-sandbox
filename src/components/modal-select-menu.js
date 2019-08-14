import modalTemplate from "./modal-select-menu.html";
import faker from "faker";

const ModalSelectMenu = {
  bindings: {
    title: "@",
    isOpen: "<",
    openEvent: "<",
    onClose: "<",
    items: "<",
    itemDisplayFn: "<",
    itemIsSelectedFn: "<"
  },
  controller: ModalSelectMenuCtrl
};

ModalSelectMenuCtrl.$inject = ["$mdDialog"];

function ModalSelectMenuCtrl($mdDialog) {
  var $ctrl = this;
  $ctrl.dialogId = "dialog" + Math.floor(Math.random() * 1000);

  this.$onChanges = (changes) => {
    if (changes.isOpen && changes.isOpen.currentValue === true) {
      $ctrl.selectedItem = undefined;
      
      $mdDialog.show({
        // parent: angular.element(document.body),
        targetEvent: $ctrl.openEvent,
        closeTo: $ctrl.openEvent.currentTarget,
        clickOutsideToClose: true,
        controller: ["$scope", "$mdDialog", "step", "users", "title", "items", "itemDisplayFn", "itemIsSelectedFn", function reassignDialogCtrl($scope, $mdDialog, step, users, title, items, itemDisplayFn, itemIsSelectedFn) {

          $scope.step = step;
          $scope.users = users;
          $scope.title = title;
          $scope.items = items;
          $scope.itemDisplayFn = itemDisplayFn;
          $scope.itemIsSelectedFn = itemIsSelectedFn;

          $scope.selectItem = item => {
            $ctrl.selectedItem = item;
            $mdDialog.hide();
          };
          $scope.close = () => $mdDialog.hide();

        }],
        template: modalTemplate,
        locals: {
          step: $ctrl.step,
          users: $ctrl.users,
          title: $ctrl.title,
          items: $ctrl.items,
          itemDisplayFn: $ctrl.itemDisplayFn,
          itemIsSelectedFn: $ctrl.itemIsSelectedFn,
        }
      })
        .finally(() => {
          $ctrl.onClose($ctrl.selectedItem);
        });
    }
  };
  

  this.$onInit = function() {
  }; 
}

export default ModalSelectMenu;
