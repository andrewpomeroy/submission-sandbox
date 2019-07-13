import template from './submission-tab-vertical.html';

const submissionTabVertical = {
	bindings: {
		name: '@',
		displayName: '@',
	},
	require: {
		// 'submissionLayout': '^'
	},
	template: template,
	controller: submissionTabVerticalController
};

submissionTabVerticalController.$inject = [];

function submissionTabVerticalController() {
	this.$onInit = function() {
		// this.submissionLayout.registerTab({name: this.name, displayName: this.displayName});
	};
}

export default submissionTabVertical;
