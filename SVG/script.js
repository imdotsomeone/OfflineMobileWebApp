function storeDataInLS(fileName, localID) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", fileName, true);
	xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		     var res = this.responseText;
		     var string = JSON.stringify(res);
		     localStorage.setItem(localID, string);
		}
	};
	xhttp.send();
}

storeDataInLS("rectElement.json", "rect");
var rectObjectsJSON = localStorage.getItem("rect");
var rectObj = JSON.parse(rectObjectsJSON);
eval("var rectelem = " + rectObj);


storeDataInLS("seatnames.json", "snames");
var seatnObjectsJSON = localStorage.getItem("snames");
var seatnObj = JSON.parse(seatnObjectsJSON);
eval("var snamedata = " + seatnObj);

function parseSVG(s) {
    var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    div.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg">'+ s +'</svg>';
    var frag = document.createDocumentFragment();
    while (div.firstChild.firstChild)
        frag.appendChild(div.firstChild.firstChild);
    return frag;
}

function parseMainSVG(width, height, id, parentId) {
	var svg = document.getElementById(id);
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);
	svg.setAttribute("viewbox", "0 0 " + width + " " + height);
}

mainSVG = "seatplan";

function generateRectElement(array) {
	var event  = "";
	for(f = 0; f < array.length; f++) {
			var element = "<rect id=\""+array[f]["id"]+	"\" x =\""+array[f]["x"]+ "\" y =\""+array[f]["y"]+ "\" width =\""+array[f]["width"]+ "\" height =\""+array[f]["height"]+ "\" fill =\""+array[f]["fill"]+"\" "+event+"></rect>";
			
			document.getElementById(mainSVG).appendChild(parseSVG(element));
	}
}


function generateTextElement(array) {
    var event  = "";
    for(f = 0; f < array.length; f++) {
                var textelement = "<text id =\""+array[f]["id"]+ "\" x =\""+array[f]["x"]+ "\" y =\""+array[f]["y"]+ "\" font-family =\""+array[f]["font-family"]+ "\" font-size =\""+array[f]["font-size"]+ "\" fill =\""+array[f]["fill"]+"\" "+event+"></text>";
        
            document.getElementById(mainSVG).appendChild(parseSVG(textelement));
    }
}

/*function generateSeatNames(){
    
}*/