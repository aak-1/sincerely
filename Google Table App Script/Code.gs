function doGet() {
 return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  var spreadSheetId = "1zTLUEEuCC97JoeBjIduTOqDLO2MO83ochmRjv8bXsxU"; //CHANGE
  var dataRange = "sheet1!B2:M"; //CHANGE

  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;

  return values;
}

//INCLUDE JAVASCRIPT AND CSS FILES
//REF: https://developers.google.com/apps-script/guides/html/best-practices#separate_html_css_and_javascript

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

//Ref: https://datatables.net/forums/discussion/comment/145428/#Comment_145428
//Ref: https://datatables.net/examples/styling/bootstrap4