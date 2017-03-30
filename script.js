function showorhidepage(id){
    var divelement = document.getElementById(id);
    divelement.classList.remove('hide');
}

var btn = document.getElementById("btn");
var pageContainer = document.getElementById("page2");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'JSONFile.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data){
    var htmlString = "";
    for(i=0; i < data.length; i++){
        html += "<p>" + "Classcode: " + data[i].classcode + "<br>" +
                "Title: " + data[i].title + "<br>" +
                "Schedule: " + data[i].schedule + "<br>" +
                "Classroom: " + data[i].classroom + "<br>" +
                "Instructor: " + data[i].instructor + "</p>";
    }
    pageContainer.insertAdjacentHTML('beforeend', htmlString);
}


/*svg script*/
