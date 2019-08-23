import SVGBlobs from "@windsor/static-assets";


const getStaticAssetsSvg = {
  bindings: {
    name: "@"
  },
  controller: getStaticAssetsSvgController,
};

getStaticAssetsSvgController.$inject = ["$element"];

function getStaticAssetsSvgController($element) {
  const $ctrl = this;

  $element.addClass("SvgWrap-icon");

  this.$onInit = function() {
    if (!SVGBlobs[$ctrl.name]) {
      throw `no svg named '${$ctrl.name}'!`;
    }
    else $element[0].innerHTML = SVGBlobs[$ctrl.name];
  };
  
}

export default getStaticAssetsSvg;