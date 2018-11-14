import template from './step-segments.html';

const StepSegments = {
	template: template,
	bindings: {
		activeIndex: '<',
		steps: '<',
	},
	controller: StepSegmentsController,
	transclude: {
		content: 'content'
	}
};

StepSegmentsController.$inject = [];

function StepSegmentsController() {

	this.$onInit = function() {
		const $ctrl = this;

	};
}

export default StepSegments;
