import template from './submission-tab.html';

const submissionTab = {
	bindings: {
		name: '@',
		displayName: '@',
	},
	require: {
		// 'submissionLayout': '^'
	},
	template: template,
	transclude: true,
	controller: submissionTabController
};

submissionTabController.$inject = [];

function submissionTabController() {
	this.$onInit = function() {
		// this.submissionLayout.registerTab({name: this.name, displayName: this.displayName});
	};
}

export default submissionTab;
