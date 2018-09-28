import template from './tabs-wrapper.html';

const TabsWrapper = {
	template: template,
	bindings: {
		items: '<'
	},
	transclude: true,
	controller: TabsWrapperController
};

TabsWrapperController.$inject = [];

function TabsWrapperController() {
	var $ctrl = this;
	this.$onInit = function() {
		$ctrl.doAThing = function (name) {
			console.log(name);
			debugger;
		}
	};
}

export default TabsWrapper;
