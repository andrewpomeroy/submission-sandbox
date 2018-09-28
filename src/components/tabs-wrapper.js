import template from './tabs-wrapper.html';

const TabsWrapper = {
	template: template,
	bindings: {
		items: '<',
		filters: '<',
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
				if (!this.filters[this.activeTab]) return  this.items;
				return this.items.filter(this.filters[this.activeTab]);
			}
		}
	});

	this.$onInit = function() {

		$ctrl.activeTab = $ctrl.initialTab;

		$ctrl.doAThing = function (name) {
			$ctrl.activeTab = name;
		}

		$ctrl.getFilteredItems = function (name) {
			if (!$ctrl.filters[name]) return $ctrl.items;
			return $ctrl.items.filter($ctrl.filters[name]);
		}

	};
}

export default TabsWrapper;
