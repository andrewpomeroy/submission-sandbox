import template from "./calendar-test.html";

const CalendarTest = {
  bindings: {

  },
  controller: CalendarTestCtrl,
  template
};

CalendarTestCtrl.$inject = ["$mdDialog"];

function CalendarTestCtrl($mdDialog) {
  var $ctrl = this;
  this.$onInit = function() {
  }; 
}

export default CalendarTest;
