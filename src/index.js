import "./styles.css";

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
var src =
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
