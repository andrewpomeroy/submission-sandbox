import template from './pill-tab.html';

const PillTab = {
	template: template,
	bindings: {
		name: '@',
		displayName: '@',
		filter: '<',
		isActive: '<',
		count: '<'
	},
	require: {
		pillTabs: '^pillTabs'
	},
	controller: PillTabController
};

PillTabController.$inject = [];

function PillTabController() {
	var $ctrl = this;

	Object.defineProperties(this, {
		shouldShow: {
			get: function getter() {
				return !(this.pillTabs.showEmpty === false && this.count === 0);
			},
		}
	});

	this.$onInit = function() {
		$ctrl.clickHandler = function () {
			$ctrl.pillTabs.onChange($ctrl.name);
		}
	}; 
}

export default PillTab;
