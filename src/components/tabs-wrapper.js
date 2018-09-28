import template from './tabs-wrapper.html';

const TabsWrapper = {
	template: template,
	bindings: {
		items: '<',
		tabs: '<',
		initialTab: '@'
	},
	transclude: true,
	controller: TabsWrapperController
};

TabsWrapperController.$inject = [];

function TabsWrapperController() {
	var $ctrl = this;

	Object.defineProperties(this, {
		currentlyFilteredItems: {
			get: function getter() {
				return $ctrl.getFilteredItems($ctrl.activeTab);
			}
		}
	});

	this.$onInit = function() {

		$ctrl.activeTab = $ctrl.initialTab;

		$ctrl.doAThing = function (name) {
			$ctrl.activeTab = name;
		}

		$ctrl.getFilteredItems = function (name) {
			const tab = $ctrl.tabs.find(t => t.name === name);
			if (!tab || !tab.filterFn) return $ctrl.items;
			return $ctrl.items.filter(tab.filterFn);
		}

	};
}

export default TabsWrapper;
