import template from './segments.html';

const Segments = {
	template: template,
	bindings: {
		activeIndex: '<',
		steps: '<',
	},
	controller: SegmentsController,
	transclude: true
};

SegmentsController.$inject = [];

function SegmentsController() {

	this.$onInit = function() {
		const $ctrl = this;

	};
}

export default Segments;
