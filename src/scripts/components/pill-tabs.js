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
		shouldShow: {
			get: function getter() {
				return this.tabsWrapper.showOnlyUnique ? this.tabsWrapper.tabContentsAreUnique : true;
			}
		}
	});

	this.$onInit = function() {
		const $ctrl = this;

		if (this.showEmpty === undefined) this.showEmpty = this.tabsWrapper.showEmpty;
		if (this.showCount === undefined) this.showCount = this.tabsWrapper.showCount;

		this.getFilteredItems = this.tabsWrapper.getFilteredItems;

	};
}

export default PillTabs;
