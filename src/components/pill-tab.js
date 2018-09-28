import template from './pill-tab.html';

const PillTab = {
	template: template,
	bindings: {
		name: '@',
		displayName: '@',
		filter: '<',
		showWhenSolo: '<'
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
		},
		isActive: {
			get: function getter() {
				return this.name === this.pillTabs.activeTab;
			}
		},
		count: {
			get: function getter() {
				return this.pillTabs.getFilteredItems(this.name) && this.pillTabs.getFilteredItems(this.name).length;
			}
		}
	});

	this.$onInit = function() {
		$ctrl.clickHandler = function () {
			$ctrl.pillTabs.onChange($ctrl.name);
		}
	}; 
}

export default PillTab;
