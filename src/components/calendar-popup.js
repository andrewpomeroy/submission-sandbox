import modalTemplate from "./calendar-popup.html";

const CalendarPopup = {
  bindings: {
    "date": "<",
    "onSelect": "<",
    "onClose": "<",
  },
  controller: CalendarPopupCtrl,
};

CalendarPopupCtrl.$inject = ["$mdDialog"];

function CalendarPopupCtrl($mdDialog) {
  var $ctrl = this;
  $ctrl.isOpen = false;
  this.$onInit = function() {
    if ($ctrl.isOpen) return;
    $ctrl.isOpen = true;

    $mdDialog
      .show({
        template: modalTemplate,
        locals: {
          date: $ctrl.date,
          onSelect: $ctrl.onSelect,
          onClose: $ctrl.onClose
        },
        onComplete: $ctrl.handleDialogOpenComplete,
        controller: ["$scope", "$mdDialog", "$timeout", "date", "onSelect", function calendarDialogCtrl ($scope, $mdDialog, $timeout, date, onSelect) {
          $scope.calendarDate = date;
          $scope.onChange = () => {
            onSelect($scope.calendarDate);
            $mdDialog.hide();
          };
        }]
      })
      .finally(function () {
        $ctrl.isOpen = false;
        $ctrl.onClose();
      });

    $ctrl.handleDialogOpenComplete = (scope) => {
      scope.onOpenComplete();
    };
  }; 
}

export default CalendarPopup;
