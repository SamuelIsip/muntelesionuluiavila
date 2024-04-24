//This function will be called when user click changing language
function translate(lng, tagAttr) {
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
}

const checkbox = document.getElementById('translation_checkbox')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    translate('es', 'lng-tag');
  } else {
    translate('ro', 'lng-tag');
  }
})
