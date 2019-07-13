import template from './step-segments.html';

const StepSegments = {
	template: template,
	bindings: {
		initialActiveIndex: '<',
		segments: '<',
	},
	controller: StepSegmentsController,
	transclude: {
		content: 'content'
	}
};

StepSegmentsController.$inject = ['$timeout'];

function StepSegmentsController($timeout) {

	Object.defineProperties(this, {
		activeIndex: {
			get: () => this._activeIndex || this.initialActiveIndex || 0,
			set: (value) => this._activeIndex = value
		},
		hoveredIndex: {
			get: () => {
				return (this._hoveredIndex !== undefined) ? this._hoveredIndex : this.activeIndex;
			},
			set: (value) => {
				if (value && value === this._hoveredIndex && this.activationTimeout) {
					$timeout.cancel(this.activationTimeout);
					this.activationTimeout = null;
				}

				if (value !== this._hoveredIndex) {
					// console.log('activationTimeout', this.activationTimeout, value);
					if (this.activationTimeout) {
						// console.log('CLEARING', this.activationTimeout);
						$timeout.cancel(this.activationTimeout);
						this.activationTimeout = null;
					}
					this.activationTimeout = $timeout(() => this._hoveredIndex = value, 50);
					// console.log('setting new activationTimeout', this.activationTimeout, 'for value', value);
				}
			}
		},
	});

	this.setHoveredIndex = (value) => {
		this.hoveredIndex = value;
	};

	this.softActivate = value => {
		this.setHoveredIndex(value);
	};
	this.softDeactivate = () => {
		this.setHoveredIndex(undefined);
	};
	this.hardActivate = value => {
		this.setHoveredIndex(value);
		this.activeIndex = value;
	};

	this.onClick = index => this.hardActivate(index);
	this.onMouseEnter = index => this.softActivate(index);
	this.onMouseLeave = () => this.softDeactivate();
	this.onFocus = index => this.softActivate(index);
	this.onBlur = () => this.softDeactivate();

	this.$onInit = function () {
		this.activeIndex = this.initialActiveIndex;
	};
}

export default StepSegments;
