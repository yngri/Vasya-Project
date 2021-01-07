function getDebtors() {
  
  var spreadSheet = SpreadsheetApp;
  var activeSpreadsheet = spreadSheet.getActiveSpreadsheet();
  var clientsSpreadsheet  = activeSpreadsheet.getSheetByName('Пользователи системы');
  
  var debtors = [];
  
  var dateColumn = 0; // A variable to store the index of a date column that matched the current date
  
  var FIRST_ROW = 1;
  var FIRST_ID_ROW = 4;
  var FIRST_COLUMN = 1;
  var LAST_ROW = clientsSpreadsheet.getLastRow();
  var LAST_COLUMN = clientsSpreadsheet.getLastColumn();
  var LAST_CLIENT_DATA_COLUMN = 6;
  
  var ID_COLUMN_INDEX = 0;
  var HAS_PAID_COLUMN_INDEX = 4;
  var PHONE_COLUMN_INDEX = 4;
  var DEBT_AMOUNT_COLUMN_INDEX = 3;
  
  var INDEX_MATCHER = 1; // Adding this variable to the index of an Nth element of an array matches it with the corresponding index from the table
  
  var clientDataRange = clientsSpreadsheet.getRange(FIRST_ID_ROW, FIRST_COLUMN, LAST_ROW, LAST_CLIENT_DATA_COLUMN).getValues(); // The range of all clients' contact data (left block of the table);
  
  var dateRange = clientsSpreadsheet.getRange(FIRST_ROW, FIRST_COLUMN, FIRST_ROW, LAST_COLUMN).getValues()[0]; // The range of all mm/year columns
  
  var currentDate = formatCurrentDate(); // Get current date in 'mm/yyyy' format

  
  // Loop through the date columns to find one that matches the current date
  for (var currentColumn = 1; currentColumn <= dateRange.length; currentColumn++) {
    if (currentDate == dateRange[currentColumn]) { 
    var dateColumn = currentColumn+INDEX_MATCHER;
    };
  }

  
  if (!dateColumn) {
    throw new Error('The value of Date Column doesnt match to the current date');
  };
  
  
  var paymentDataRange = clientsSpreadsheet.getRange(FIRST_ID_ROW, dateColumn, LAST_ROW, LAST_CLIENT_DATA_COLUMN).getValues(); // The range of all the payment data matched with the current month
  
  
  for (var currentRow = 0; currentRow<clientDataRange.length; currentRow++) {
    
    var clientId = clientDataRange[currentRow][ID_COLUMN_INDEX];
    if (clientId.toString().trim() == 'Итого' || clientId.toString()[0].trim() == '5') break;
    var phoneNumber = clientDataRange[currentRow][PHONE_COLUMN_INDEX];
    
    var hasPaid = paymentDataRange[currentRow][HAS_PAID_COLUMN_INDEX];
    var debtAmount = paymentDataRange[currentRow][DEBT_AMOUNT_COLUMN_INDEX];
    
    if (!hasPaid){
    debtors.push({
      id: clientId,
      Phone: phoneNumber,
      Amount: debtAmount,
      date: currentDate
    });
  }       
 }
  
 Logger.log(JSON.stringify(debtors));  
  
} 


function formatCurrentDate () {
  var currentDateInMilliseconds = new Date();
  var day = currentDateInMilliseconds.getDate();  
  
  var currentMonthIndex = 1;
  var nextMonthIndex = 2;
  if (day<=20) {var month = String(currentDateInMilliseconds.getMonth() + currentMonthIndex).padStart(2, '0')
  } else {
  var month = String(currentDateInMilliseconds.getMonth() + nextMonthIndex).padStart(2, '0')
  };
 
  var year = currentDateInMilliseconds.getUTCFullYear();
  var currentDate = month + "/" + year;
  return currentDate;
}