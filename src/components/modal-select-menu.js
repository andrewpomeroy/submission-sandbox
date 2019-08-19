import modalTemplate from "./modal-select-menu.html";

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
        targetEvent: $ctrl.openEvent,
        closeTo: $ctrl.openEvent.currentTarget,
        onComplete: $ctrl.handleOnComplete,
        clickOutsideToClose: true,
        controller: ["$scope", "$element", "$mdDialog", "step", "users", "title", "items", "itemDisplayFn", "itemIsSelectedFn", function reassignDialogCtrl($scope, $element, $mdDialog, step, users, title, items, itemDisplayFn, itemIsSelectedFn) {

          $scope.step = step;
          $scope.users = users;
          $scope.title = title;
          $scope.items = items;
          $scope.itemDisplayFn = itemDisplayFn;
          $scope.itemIsSelectedFn = itemIsSelectedFn;

          $scope.onOpenComplete = () => {
            const listElement = [].slice.call($element.find("div")).find(x => x.hasAttribute("modal-select-menu-list"));
            listElement.style.minHeight = listElement.getBoundingClientRect().height + "px";
          };

          $scope.close = () => $mdDialog.hide();

          $scope.selectItem = item => {
            $ctrl.selectedItem = item;
            $mdDialog.hide();
          };
        
          $scope.$watch("stringFilter", (newValue) => {
            $scope.filterValue = newValue != null && newValue.trim().toLowerCase();
            $scope.applyDisplayTransformations();
          });

          $scope.applyDisplayTransformations = () => {
            $scope.displayedItems = $scope.items.filter(x => {
              if ($scope.filterValue == false || $scope.filterValue === "") return true; 
              return x.displayName.trim().toLowerCase().indexOf($scope.filterValue) !== -1;
            });
          };

          $scope.applyDisplayTransformations();
          
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
  
  this.handleOnComplete = (scope) => {
    scope.onOpenComplete();
  };

  this.$onInit = function() {
  }; 
}

export default ModalSelectMenu;
