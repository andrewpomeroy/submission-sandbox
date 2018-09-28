import template from './pill-tabs.html';

const PillTabs = {
	template: template,
	bindings: {
		onChange: '<',
		showEmpty: '<',
	},
	controller: PillTabsController,
	transclude: true,
};

PillTabsController.$inject = [];

function PillTabsController() {
	this.$onInit = function() {
		
	};
}

export default PillTabs;
