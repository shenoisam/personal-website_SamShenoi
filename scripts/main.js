

console.log("here")
  $.get( "https://api.github.com/users/shenoisam/repos?per_page=100", function( data ) {
    console.log(data)
    var div = document.getElementById("projs")
    data.forEach(element => {
      $.get("https://api.github.com/repos/shenoisam/" + element["name"], function(d){
     
        div.append(createDiv(d["name"], d["description"],d["html_url"] ))
      })
      
    });
  });



function createDiv(name, description, link){
  //Create the container div
  var d  = document.createElement("div")
  
  var h = document.createElement("a")
  h.href = link
  h.className = "black"

  d.className = "sectionDiv"

  if( !description){
    description = ""
  }

  h.innerHTML = "<h6> " + name + "</h6> <p> " + description + "<p>"
  d.append(h)



  


  return d
}
