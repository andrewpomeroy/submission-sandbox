import { SVGBlobs } from "@windsor/static-assets";

const getSvg = {
  bindings: {
    name: "@"
  },
  controller: CollapseContainerController,
};

CollapseContainerController.$inject = ["$element"];

function CollapseContainerController($element) {

  const $ctrl = this;


  $element.addClass("SvgWrap-icon");

  this.$onInit = function() {

    if (!SVGBlobs[$ctrl.name]) {
      throw `no svg named '${$ctrl.name}'!`;
    }

    else $element[0].innerHTML = SVGBlobs[$ctrl.name];

  };
}

export default getSvg;