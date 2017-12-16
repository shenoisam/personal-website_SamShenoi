
var elementUsed = document.getElementById("dropdown");
//elementUsed.addEventListener('click',displayDrop());

function displayDrop()
{
  var dropDownMenu = document.getElementById("dd");
  var className = dropDownMenu.className;

  if(className == 'appear')
  {
    dropDownMenu.className = "hide";
  }
  else {
    dropDownMenu.className = "appear";
  }
}
