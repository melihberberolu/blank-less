var setIdForInputs = function(elementClassName) {
  var checkboxes = document.getElementsByClassName(elementClassName);
  console.log('checkboxes length' , checkboxes.length);
  for (var i = 0; i < checkboxes.length; i++) {
    var input = checkboxes[i].querySelector("input");
    console.log('input ' , input);
    var label = checkboxes[i].querySelector("label");
    var isId = input.id;
    console.log('isId ' , isId);
    var isFor = label.for;
    console.log('isFor ' , isFor);
    if (!isId) {
      console.log('if 1');
      var uniqueId = "input-" + Math.random().toString(32).slice(2);
      console.log('uniqueId ' , uniqueId);
      label.setAttribute("for", uniqueId);
      input.id = uniqueId;
    }
    else {
      label.setAttribute("for", isId);
    }
  };
}
window.onload = function() {
  setIdForInputs("checkbox-custom");
  setIdForInputs("radio-custom");
}