

console.log("here")
  $.get( "https://api.github.com/users/shenoisam/repos?per_page=100", function( data ) {
    console.log(data)
    var div = document.getElementById("projs")
    data.forEach(element => {
      $.get("https://api.github.com/repos/shenoisam/" + element["name"], function(d){

        div.append(createDiv(d["name"], d["description"]))
      })
      
    });
  });



function createDiv(name, desription){
  //Create the container div
  var d  = document.createElement("div")
  d.className = "card"

  // create the header div 
  var head = document.createElement("div")
  head.className = "card-header"
  head.id = name

  //Create the h5 
  var h = document.createElement("h5")
  h.className = "mb-0"

  //Create the button
  var but = document.createElement("button")
  but.className = "btn btn-link"
  
  $(but).data('toggle', "collapse")
  $(but).data('target', "#" + name)
  //$(but).attr('aria-expanded', 'false');
  //$(but).attr("aria-controls",name)
  //$(but).aria("expanded","false")
  //$(but).aria("controls", name)

  //Create the text
  var p = document.createElement("h5")
  p.innerText = name
  p.className = "black"

  //Add text to the button 
  but.append(p)

  //Create the card expanded version
  var d2 = document.createElement("div")
  d2.id = name 
  d2.class = "collapse"
  //$(d2).data("parent","#accordian")
  //$(d2).attr('aria-labelledby', name);

  var p2 = document.createElement('p')
  p2.innerText = desription

  d2.append(p2)

  head.append(h)
  head.append(but)
  d.append(head)


  return d
}
/*
<div class="card">
				<div class="card-header" id="headTwo">
				  <h5 class="mb-0">
					<button class="btn btn-link" data-toggle="collapse" data-target="#colTwo" aria-expanded="false" aria-controls="colTwo">
					  <h5 class="black">CPRIT Undergraduate Fellowship - UTHealth School of Biomedical Informatics</h5>
					  <p style="text-align: left;" class="black">Research Fellow</p>
					</button>
				  </h5>
				</div>
			
				<div id="colTwo" class="collapse" aria-labelledby="headTwo" data-parent="#accordion">
				  <div class="card-body">
					  <ul>
						<li>Developed the PRecIsion Medicine Robust Oncology Search Engine (PRIMROSE)</li>
						<li>Connected physicians with precision medicine scientific abstracts and clinical trials</li>
						<li>Placed 3rd in the undergraduate research fellow elevator speech competition</li>
					   </ul>
				  </div>
				</div>
        </div>
        */