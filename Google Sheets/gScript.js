function doSmth() {
  
    var sheet = SpreadsheetApp;
    var ass = sheet.getActiveSpreadsheet();
    var activeSheet = ass.getActiveSheet();
    
    //Logger.log(activeSheet.getRange("BT4:BT155").getValues());
    
    //var tempValue = activeSheet.getRange("A6").getValue(); // get the value of a cell
    //activeSheet.getRange("C6:D7").setValue(tempValue); // overwrite the range with the value taken from the cell
    
    var debtIds = [];
    
    for (var i = 4; i < 173; i++) {
      if (activeSheet.getRange(i, 74).getValue() == false) { debtIds.push(activeSheet.getRange(i, 1).getValue()) };
  }
    Logger.log(debtIds);
  
  }
  