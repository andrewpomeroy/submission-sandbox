function wndAutofocus () {
  return {
    scope: {
      trigger: "@wndAutofocus"
    },
    link: function link(scope, element) {
      scope.$watch("trigger", function (value) {
        if (value === "true") {
          // $timeout(() => {
          element[0].focus();
          // });
        }
      });
    }
  };
}

export default wndAutofocus;
