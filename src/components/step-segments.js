import template from './step-segments.html';

const StepSegments = {
	template: template,
	bindings: {
		initialActiveIndex: '<',
		steps: '<',
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
			get: () => {
				return (this._activeIndex !== undefined) ? this._activeIndex : this.hardActiveIndex;
			},
			set: (value) => {
				if (value && value === this._activeIndex && this.activationTimeout) {
					$timeout.cancel(this.activationTimeout);
					this.activationTimeout = null;
				}

				if (value !== this._activeIndex) {
					// console.log('activationTimeout', this.activationTimeout, value);
					if (this.activationTimeout) {
						// console.log('CLEARING', this.activationTimeout);
						$timeout.cancel(this.activationTimeout);
						this.activationTimeout = null;
					}
					this.activationTimeout = $timeout(() => this._activeIndex = value, 50);
					// console.log('setting new activationTimeout', this.activationTimeout, 'for value', value);
				}
			}
		},
	});

	this.setActivatedIndex = (value) => {
		this.activeIndex = value;
	};

	this.softActivate = value => {
		this.setActivatedIndex(value);
	};
	this.softDeactivate = () => {
		this.setActivatedIndex(undefined);
	};
	this.hardActivate = value => {
		this.setActivatedIndex(value);
		this.hardActiveIndex = value;
	};

	this.onMouseEnter = index => this.softActivate(index);
	this.onMouseLeave = () => this.softDeactivate();
	this.onFocus = index => this.softActivate(index);
	this.onBlur = () => this.softDeactivate();

	this.$onInit = function () {
		this.hardActiveIndex = this.initialActiveIndex;
	};
}

export default StepSegments;
