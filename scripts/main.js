

var sendMessageButton = document.getElementById("send");
sendMessageButton.addEventListener("click",sendMessage)

function sendMessage()
{
  var name = document.getElementById("First Name")
  var lastName = document.getElementById("Last Name");
  var subject = 'Inquiry -'+name.value+ " " + lastName.value;

  var message = document.getElementById("Message").value;

  var mailtoLink = 'mailto:shenoisam@gmail.com' +'?subject='+subject +'&body='+message;
  window.open(mailtoLink);




}
