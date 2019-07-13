import template from './submission-tabs-vertical.html';

const submissionTabsVertical = {
	template: template,
	transclude: true,
	controller: submissionTabsVerticalController
};

submissionTabsVerticalController.$inject = [];

function submissionTabsVerticalController() {
	this.$onInit = function() {};
}

export default submissionTabsVertical;
