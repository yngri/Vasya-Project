function doSmth() {
  
  var sheet = SpreadsheetApp;
  var ass = sheet.getActiveSpreadsheet();
  var s = ass.getSheetByName('Пользователи системы');
  
  var debtors = [];
  var allClientDataRange = s.getRange(4, 1, s.getLastRow(), 6).getValues(); // The range of all clients' contact data (left block of the table)
  var dateRangeArray = s.getRange(1, 1, 1, s.getLastColumn()).getValues()[0]; // The range of all mm/year columns
  
  // Get current date in 'mm/yyyy' format
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var year = dateObj.getUTCFullYear();
  var currentDate = month + "/" + year;
  
  // Loop through the date columns to find one that matches the current date
  for (var i = 0; i < dateRangeArray.length; i++) {
  if (currentDate == dateRangeArray[i]) { var dateColumn = i }
  }
  
  var paymentDataRange = s.getRange(4, dateColumn+1, s.getLastRow(), 6).getValues(); // The range of all the payment data matched with the current month
  
  
  for (var i = 0; i<allClientDataRange.length; i++) {
    var idValue = allClientDataRange[i][0];
    var isPaidValue = paymentDataRange[i][4];
    var phoneValue = allClientDataRange[i][4];
    var amountValue = paymentDataRange[i][3];
    
    if (idValue.toString()[0] != '1') break;
    
    if (!isPaidValue){
    debtors.push({
      id: idValue,
      Phone: phoneValue,
      Amount: amountValue     
    });
  }
       
}
  
  var outputArray = JSON.stringify(debtors); 
  Logger.log(outputArray);  
  
} 

//  // Get current date in mm/yyyy format
//  var dateObj = new Date();
//  var month = dateObj.getUTCMonth() + 1; //months from 1-12
//  var year = dateObj.getUTCFullYear();
//  var currentDate = month + "/" + year;
//  //var currentDate = '01/2021'
//  
//  
//  // Get range of columns containing the written date (e.g '12/2020')
//  var dateRangeArray = s.getRange(1, 1, 1, s.getLastColumn()).getValues();
//  var dateRange = dateRangeArray[0];
//  
//  // Loop through the date columns to find one matching the current date
//  for (var i = 0; i < dateRange.length; i++) {
//  if (currentDate == dateRange[i]) { var dateColumn = i }
//  }
//  
//  // Store the column ranges with the data necessary for export
//  var isPaidRange = s.getRange(4,dateColumn+5,169).getValues();
//  var idRange = s.getRange(4,1,169).getValues();
//  var phoneRange = s.getRange(4,5,169).getValues();
//  var amountRange = s.getRange(4,dateColumn+4,169).getValues();
//  
//  
////Converting 2d array into 1d array
//var isPaidArray = [];
//  for (var r=0; r<isPaidRange.length; r++) {
//    for (i in isPaidRange[0]) {
//      var cell = isPaidRange[r][i];
//      isPaidArray.push(cell);
//    }
//  }
//  //Logger.log(isPaidArray);

  
//// Loop through the isPaid range to find the missing payments and push the debtor(s) info into an object(s)
//  for (var i = 0; i < isPaidArray.length; i++) {
//    if (isPaidArray[i] == false) 
//    { debtors.push(
//      { ID : idArray[i],
//        Phone : phoneArray[i],
//        Amount : amountArray[i]
//      });
//    }
//  }
//  
//  var debtorsJsonArray = JSON.stringify(debtors); 
//  Logger.log(debtorsJsonArray);  



  
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
// Logger.log(s.getActiveCell().getColumn()); // get active cell column index