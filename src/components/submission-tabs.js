import template from './submission-tabs.html';

const submissionTabs = {
	template: template,
	transclude: true,
	controller: submissionTabsController
};

submissionTabsController.$inject = [];

function submissionTabsController() {
	this.$onInit = function() {};
}

export default submissionTabs;
