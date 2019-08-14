import modalTemplate from "./modal-select-menu.html";
import faker from "faker";

const ModalSelectMenu = {
  bindings: {
    isOpen: "<",
    openEvent: "<",
    onClose: "<",
  },
  controller: ModalSelectMenuCtrl
};

ModalSelectMenuCtrl.$inject = ["$mdDialog"];

function ModalSelectMenuCtrl($mdDialog) {
  var $ctrl = this;
  $ctrl.dialogId = "dialog" + Math.floor(Math.random() * 1000);

  this.$onChanges = (changes) => {
    if (changes.isOpen && changes.isOpen.currentValue === true) {
      $mdDialog.show({
        // parent: angular.element(document.body),
        targetEvent: $ctrl.openEvent,
        clickOutsideToClose: true,
        controller: ["$scope", "$mdDialog", "step", "users", function reassignDialogCtrl ($scope, $mdDialog, step, users) {
          $scope.step = step,
          $scope.users = users,
          $scope.isAssigned = (user) => user.isAssigned;
          $scope.selectUser = user => {
            $ctrl.selectedUser = user;
            $mdDialog.hide();
          };
        }],
        template: modalTemplate,
        locals: {
          step: $ctrl.step,
          users: $ctrl.users
        }
      })
        .finally(() => {
          $ctrl.onClose($ctrl.selectedUser);
        })
      ;
    }
  };
  

  this.$onInit = function() {
    $ctrl.users = [];
    // create fake "users" list
    for (let index = 0; index < (Math.floor(Math.random() * 20) + 50); index++) {
      $ctrl.users.push({ username: faker.name.findName() });
    }
    // Mock effect of designating one user as current assignee
    const int = Math.floor(Math.random() * $ctrl.users.length);
    $ctrl.users[int].isAssigned = true;
  }; 
}

export default ModalSelectMenu;
