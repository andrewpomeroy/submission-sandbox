import template from './pill-tabs.html';

const PillTabs = {
	template: template,
	bindings: {
		onChange: '<',
		showEmpty: '<',
		filters: '<',
		activeTab: '<'
	},
	require: {
		'tabsWrapper': '?^tabsWrapper'
	},
	controller: PillTabsController,
	transclude: true,
};

PillTabsController.$inject = [];

function PillTabsController() {

	Object.defineProperties(this, {
		// filters: {
		// 	get: function getter() {
		// 		return this.tabsWrapper.filters
		// 	},
		// },
		// activeTab: {
		// 	get: function getter() {
		// 		return this.tabsWrapper.activeTab;
		// 	}
		// }
	});

	this.$onInit = function() {

		this.getFilteredItems = this.tabsWrapper.getFilteredItems;
		
	};
}

export default PillTabs;
