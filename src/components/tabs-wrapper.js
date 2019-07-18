import template from "./tabs-wrapper.html";

const TabsWrapper = {
  template: template,
  bindings: {
    items: "<",
    tabs: "<",
    initialActiveTab: "@",
    showEmpty: "<",
    showCount: "<",
    showOnlyUnique: "<"
  },
  transclude: true,
  controller: TabsWrapperController
};

TabsWrapperController.$inject = [];

function TabsWrapperController() {
  var $ctrl = this;


  $ctrl.getFilteredItems = function (name) {
    const tab = $ctrl.tabs.find(t => t.name === name);
    if (!tab || !tab.filterFn) return $ctrl.items;
    return $ctrl.items.filter(tab.filterFn);
  };

  $ctrl.activateTab = function (name) {
    $ctrl.activeTab = name;
  };


  Object.defineProperties(this, {
    currentlyFilteredItems: {
      get: function getter() {
        return $ctrl.getFilteredItems($ctrl.activeTab);
      }
    },
    noFilterTabCount: {
      get: function getter() {
        return $ctrl.tabs.filter(x => !x.filterFn).length;
      }
    },
    tabContentsAreUnique: {
      get: function getter() {
        if (!$ctrl.items.length) return true;

        const arrayUnique = (v, i, a) => a.indexOf(v) === i;
        const arraysEqual = (arr1, arr2) => {
          if (arr1.length !== arr2.length)
            return false;
          for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
              return false;
          }
          return true;
        };

        const tabs = $ctrl.tabs.filter(tab => $ctrl.getFilteredItems(tab.name).length);
        const allItems = [].concat(...(tabs.map(group => $ctrl.getFilteredItems(group.name))));
        const allItemsUnique = allItems.filter(arrayUnique);

        return !tabs.every((tab) => {
          const tabItems = $ctrl.getFilteredItems(tab.name);
          return arraysEqual(
            tabItems, 
            [...tabItems, ...allItemsUnique].filter(arrayUnique)
          );
        });
      }
    }
  });

  this.$onInit = function() {
    $ctrl.activeTab = $ctrl.initialActiveTab || $ctrl.tabs[0];
    if ($ctrl.showOnlyUnique !== false) $ctrl.showOnlyUnique = true;

    if ($ctrl.noFilterTabCount > 1) {
      // eslint-disable-next-line no-console
      console.warn("More than one 'all' tab (no filter criteria) has been defined, something's probably not right.");
    }

  };
}

export default TabsWrapper;
