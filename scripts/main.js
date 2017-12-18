
var elementUsed = document.getElementById("dropdown");
elementUsed.addEventListener("click",displayDrop);

function displayDrop()
{
  var dropDownMenu = document.getElementById("dd");
  var className = dropDownMenu.className;

  if(dropDownMenu.className == "appear")
  {
    dropDownMenu.className = "hide";
  }
  else if(dropDownMenu.className == "hide") {
     dropDownMenu.className = "appear";
   }

}

var sendMessageButton = document.getElementById("send");
sendMessageButton.addEventListener("click",sendMessage)

function sendMessage()
{
  var name = document.getElementById("First Name")
  var lastName = document.getElementById("Last Name");
  name = name.value+ " " + lastName.value;
  var email = document.getElementById("Email Address").value;
  var message = document.getElementById("Message").value;

  window.open('mailto:shenoisam@gmail.com?');



}
