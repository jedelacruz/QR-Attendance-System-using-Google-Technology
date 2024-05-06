function sendEmails() {
  // Define a mapping between names and email addresses
  var emailMapping = {
    "#name of the answer in google form": "their email??",
    "John Doe(example)": "johndoe9@gmail.com"
    
    // Add more name-email mappings as needed
  };

  // Get the form responses
  var formResponses = FormApp.getActiveForm().getResponses();
  var latestResponse = formResponses[formResponses.length - 1];
  var itemResponses = latestResponse.getItemResponses();

  // Initialize variables to store name and email address
  var name = "";
  var emailAddress = "";

  // Loop through each item response to find the response for the "Name" question
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();

    // Check if the question is labeled "Name"
    if (question === "Name") {
      // Get the response for the "Name" question
      name = itemResponse.getResponse();
      // Get the corresponding email address from the mapping
      emailAddress = emailMapping[name];
      break; // Exit the loop once the name is found
    }
  }

  // If a valid email address is found, proceed to send the email
  if (emailAddress) {
    var subject = "Good morning!";
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleString('en-US', { timeZone: 'Asia/Manila', hour12: true }); // time of what u want I already formatted it

    // Compose the email body for time in
    var emailBody = "Hello There!<br><br>I am pleased to inform you that your child " + name + " from (child section), has safely arrived on the school premises on " + formattedTime + ".";

    // Send email
    GmailApp.sendEmail(emailAddress, subject, "", { htmlBody: emailBody });
  }
}
