import template from './pill-tabs.html';

const PillTabs = {
	template: template,
	bindings: {
		tabs: '<',
		onChange: '<',
		showEmpty: '<',
		showCount: '<',
		activeTab: '<'
	},
	require: {
		'tabsWrapper': '?^tabsWrapper'
	},
	controller: PillTabsController,
};

PillTabsController.$inject = [];

function PillTabsController() {

	Object.defineProperties(this, {
		// tabs: {
		// 	get: function getter() {
		// 		return this.tabsWrapper.tabs
		// 	},
		// },
		// activeTab: {
		// 	get: function getter() {
		// 		return this.tabsWrapper.activeTab;
		// 	}
		// }
	});

	this.$onInit = function() {

		if (this.showCount !== false) this.showCount = true;

		this.getFilteredItems = this.tabsWrapper.getFilteredItems;

	};
}

export default PillTabs;
