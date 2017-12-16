
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
