function distributeGuests(numGuests, numTables) {
    const guestsPerTable = Math.floor(numGuests / numTables);
    const remainder = numGuests % numTables;
  
    const tables = new Array(numTables).fill(guestsPerTable);
  
    // Distribute the remainder of guests across the tables
    for (let i = 0; i < remainder; i++) {
      tables[i % numTables]++;
    }
  
    return tables;
  }
  
  function getValidInput(promptMessage) {
    let userInput;
    do {
      userInput = parseInt(prompt(promptMessage));
    } while (isNaN(userInput) || userInput <= 0);
    return userInput;
  }
  
  // Get user input for the number of guests and tables
  const numGuests = getValidInput("How many guests do you have? ");
  const numTables = getValidInput("Enter the nHow many tables do you want?");
  
  const distributedGuests = distributeGuests(numGuests, numTables);
  
  // Construct the message for alert
  let alertMessage = `Number of guests per table:\n`;
  for (let i = 0; i < distributedGuests.length; i++) {
    alertMessage += `Table ${i + 1}: ${distributedGuests[i]} guests\n`;
  }
  
  // Display the alert message
  alert(alertMessage);
  