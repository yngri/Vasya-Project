function doSmth() {
  
  var sheet = SpreadsheetApp;
  var ass = sheet.getActiveSpreadsheet();
  var s = ass.getSheetByName('Пользователи системы');
  
//  var debtors = [];
//  var isPaidValues = s.getRange(4,74,173).getValues();
//  var idValues = s.getRange(4,1,173).getValues();
//  var phoneValues = s.getRange(4,5,173).getValues()
//  var amountValues = s.getRange(4,73,173).getValues();
//  
  
//  for (var i = 0; i < isPaidValues.length; i++) {
//    if (isPaidValues[i] == false) 
//    { debtors.push(
//      { ID : idValues[i],
//        Phone : phoneValues[i],
//        Amount : amountValues[i]
//      });
//    }
//  }
  
//  var debtorsJsonArray = JSON.stringify(debtors);
//  Logger.log(debtorsJsonArray);
  
  // Get current date in mm/yyyy format
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var year = dateObj.getUTCFullYear();
  var currentDate = month + "/" + year;
  
  var dateRangeArray = s.getRange(1, 70, 1, s.getLastColumn()).getValues();
  var dateRange = dateRangeArray[0];
  
  for (var i = 0; i < dateRange.length; i++) {
    if (currentDate == dateRange[i]) { Logger.log(dateRange[i])}
  }
    
  //Logger.log(dateRange);
   
  //Logger.log(s.getActiveCell().getColumn());
  
}


// Non-optimized Object population
// ID : activeSheet.getRange(i, 1).getValue(),
// Phone : activeSheet.getRange(i, 5).getValue(),
// Amount : activeSheet.getRange(i, 73).getValue()


// Time formatting Function (Ms to hh:mm:ss)
// function msToTime(duration) {
//   var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = Math.floor((duration / 1000) % 60),
//     minutes = Math.floor((duration / (1000 * 60)) % 60),
//     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
//
//   hours = (hours < 10) ? "0" + hours : hours;
//   minutes = (minutes < 10) ? "0" + minutes : minutes;
//   seconds = (seconds < 10) ? "0" + seconds : seconds;
//
//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
//   }
//  Logger.log(msToTime(new Date().getTime()));

// var tempValue = activeSheet.getRange("A6").getValue(); // get the value of a cell
// activeSheet.getRange("C6:D7").setValue(tempValue); // overwrite the range with the value taken from the cell