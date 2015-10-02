(function(window, document, undefined) {
  var setIdForInputs = function(elementClassName) {
    var elements = document.getElementsByClassName(elementClassName);
    // console.log('elements length' , elements.length);
    for (var i = 0; i < elements.length; i++) {
      var input = elements[i].querySelector("input");
      // console.log('input ' , input);
      var label = elements[i].querySelector("label");
      var isId = input.id;
      // console.log('isId ' , isId);
      var isFor = label.for;
      // console.log('isFor ' , isFor);
      if (!isId) {
        // console.log('if 1');
        var uniqueId = "input-" + Math.random().toString(36).slice(2);
        // console.log('uniqueId ' , uniqueId);
        label.setAttribute("for", uniqueId);
        input.id = uniqueId;
      }
      else {
        label.setAttribute("for", isId);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    setIdForInputs("checkbox-custom");
    setIdForInputs("radio-custom");
  }, false);
})(window, document);