function showorhidepage(id, id2){
    var divelement = document.getElementById(id);
    var divelement2 = document.getElementById(id2);
        divelement.classList.toggle('hide');
        divelement2.classList.toggle('hide');
}
//GLOBAL VARS
var status;
var statusTimeout;
var globalClassIndex;
var globalStudentsFile;
var globalClickAndClick = "";
var defClickAndClick = "";
var selectedClass;
//ADD/REMOVE TABLE ROWS
/*Table row selection handler */

function status(msg){
    status = document.getElementsByClassName("addClass-status")[0];
    status.style.color = color;
    status.innerHTML = msg;
    setTimeout(
        function(){
            status.innerHTML = "Click the Finish button to add student to database.";   
        });
}

function tableSelect() {
    var table = document.getElementsByClassName("classtable")[0];
    var rows = table.getElementsByTagName("tr");
    
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i]; 
        var createClickHandler = 
            function(row) {
                return function() { 
                    var cell1 = row.getElementsByTagName("td")[0];
                    var cell2 = row.getElementsByTagName("td")[1];
                    var cell3 = row.getElementsByTagName("td")[2];
                    var id1 = cell1.innerHTML;
                    var id2 = cell2.innerHTML;
                    var id3 = cell3.innerHTML;
                    
                    document.getElementById("classSelectHeader").innerHTML = id1 + " | " + id2 + " | " + id3;
                    
                    currentRowIndex =  this.rowIndex;   
                 }
            };
        currentRow.onclick = createClickHandler(currentRow);
    }
}
window.onload = tableSelect();

function validateClass(){
    var validClass = true;
  
    var validCode = true;
    var validName = true;
    var validStart = true;
    var validEnd = true;
    var validDay = true;
  
    var x = document.forms["checkIfValid"]["classCode"].value;
    var dgt=/[0-9]/;
    var y = document.forms["checkIfValid"]["className"].value;
    var z = document.forms["checkIfValid"]["starttime"].value;
    var a = document.forms["checkIfValid"]["endtime"].value;
    var b = document.forms["checkIfValid"]["day"].value;
    
    if (x == null || x == "") {
//      alert("Class Code is empty");
        validClass = false;
        validCode = false;
    }
  
    if (dgt.test(x) != true) {
//        alert("Class Code can only contain digits");
        validClass = false;
        validCode = false;
    }
  
    if (y == null || y == "") {
//      alert("Class Name is empty");
      validClass = false;
      validName = false;
    }
  
    if (z == null || z == "") {
//      alert("Start Time is empty");
      validClass = false;
      validStart = false;
    }
  
    if (a == null || a == "") {
//      alert("End Time is empty");
      validClass = false;
      validEnd = false;
    }

    if (b == null || b == "") {
//      alert("Days is empty");
      validClass = false;
      validDay = false;
    }
  
    if(validCode == false || validName == false || validStart == false || validEnd == false || validDay == false) {
      var errorStr = "";
      
      if(validCode == false) {
        errorStr += "\nClass Code";
      }
      
      if(validName == false) {
        errorStr += "\nClass Name";
      }
      
      if(validStart == false) {
        errorStr += "\nStart Time";
      }
      
      if(validEnd == false) {
        errorStr += "\nEnd Time";
      }
      
      if(validDay == false) {
        errorStr += "\nDays";
      }
      
      alert("The following fields are either empty or contain invalid input: \n"+ errorStr);
    }
  
    if(validClass == true) {
      storeClassRow();
    }
}

function loadJSON(jsonFileName, jsonHandler) {
  var jsonRequest = new XMLHttpRequest();
  jsonRequest.open("GET","scripts/"+ jsonFileName +".json",true);
  jsonRequest.send();
  jsonRequest.onreadystatechange = jsonHandler;
}

// studentShufflingHandler
/* Handler for shuffling students. This function is passed as a jsonHandler to loadJSON
 * when shuffling students.
 */
function studentShufflingHandler() {
  if(this.readyState == 4){
    var parsedJSON = JSON.parse(this.responseText);
    for(var j=0; j<parsedJSON.courses.length; j++) {
      var currentIndex = parsedJSON.courses[j].students.length , tempIndex, randomIndex;
      while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempIndex = parsedJSON.courses[j].students[currentIndex];
        parsedJSON.courses[j].students[currentIndex] = parsedJSON.courses[j].students[randomIndex];
        parsedJSON.courses[j].students[randomIndex] = tempIndex;
      }

      // call the function that uses the shuffled list
      checkShuffle(parsedJSON);
    }
  }
}

// function for shuffling called by the HTML
function studentShuffle() {
  loadJSON("current", studentShufflingHandler);
}

// EDITED
// function called by the HTML
function storeClassRow() {
  var xClass = {
    "classCode" : document.forms["checkIfValid"]["classCode"].value,
    "className" : document.forms["checkIfValid"]["className"].value,
    "classSchedule" : document.forms["checkIfValid"]["starttime"].value + "-" + document.forms["checkIfValid"]["endtime"].value + " " + document.forms["checkIfValid"]["day"].value
  }

  jsonStore(xClass);
}

function jsonStore(jsonObject) {
  var jsonData = JSON.stringify(jsonObject);
  localStorage.setItem("class"+globalClassIndex, jsonData);
  globalClassIndex+=1;
}

function startupFunctions() {
  setDefaultClickAndClick();
  showClassesInTable();
}

function setDefaultClickAndClick() {
  globalClickAndClick = "";
  defClickAndClick = "";
  
  for(var i=0; i<14; i++) {
    globalClickAndClick += "&nbsp;";
    defClickAndClick += "&nbsp;";
  }
}

function showClassesInTable() {

  globalClassIndex = localStorage.length;
  
  var classesTable = document.getElementById("tableClasses"); 
  var tempClass = "";
  for(var i=0; i<globalClassIndex; i++) {
    tempClass = JSON.parse(localStorage.getItem("class"+i));
    var row = classesTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    row.setAttribute("id", "classRow"+i);
    row.setAttribute("onclick","showSeatPlan()");
    cell1.innerHTML=tempClass.classCode;
    cell2.innerHTML=tempClass.className;
    cell3.innerHTML=tempClass.classSchedule;
  }
}

function showSeatPlan() {
  location.href = '#page6'; 
  showorhidepage('page6','page2');
}

function storeClickAndClick(studNum, classNum) {
  var tempClass = JSON.parse(localStorage.getItem("class"+classNum));
  var tempStudent = tempClass.students[studNum];
  
  globalClickAndClick = tempStudent.name;
  console.log("global: "+globalClickAndClick);
}

function assignClickAndClick(seatId) {
  console.log("global: "+globalClickAndClick);
  console.log("default: "+defClickAndClick);

  for(var i=0; i<5; i++) {
    for(var j=0; j<5; j++) {
      for(var k=0; k<2; k++){
        var tempCell;
        if(k==0) {
          tempCell = document.getElementById("l"+i+j);
        } else {
          tempCell = document.getElementById("r"+i+j);
        }
        
        console.log(tempCell.innerHTML);
        
        if(tempCell.innerHTML == globalClickAndClick) {
          tempCell.innerHTML = defClickAndClick;
          console.log("Found. Cleaning cell");
        }
      } 
    }
  }
  
  var seat = document.getElementById(seatId);
  seat.innerHTML = globalClickAndClick;
  setDefaultClickAndClick();
}

function showStudentsInTable() {
  var studentTable = document.getElementById("studentsTable");
  for(var i=0; i<globalStudentsFile.students.length; i++) {
    var row = studentTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML=globalStudentsFile.students[i].idNumber;
    cell2.innerHTML=globalStudentsFile.students[i].name;
    cell3.innerHTML=globalStudentsFile.students[i].gender;
    cell4.innerHTML=globalStudentsFile.students[i].course;
  }
}

function saveSeatPlan() {
  console.log("pressed");
  location.href = "#close";
  
  var sPlan = "{ \"seatplan\": [";
  
  for(var i=0; i<2; i++){ // wing
    sPlan += "[";  
    for(var j=0; j<5; j++){ // row
      sPlan += "[";
      for(var k=0; k<5; k++){ // cell
        var tempWing = i===0?"l":"r";
        var tempString = "";
        tempString = document.getElementById(tempWing+j+""+k).innerHTML;

        sPlan += "\""+tempString+"\"";
        
        if(k!=4) {
          sPlan += ",";
        }
        
      }
      sPlan += "]";
      
      if(j!=4) {
        sPlan += ",";
      }  
      
    }
    
    sPlan += "]";
    if(i!=1) {
      sPlan += ",";
    }
  }
  
  sPlan += "]}";
  
  var tempClass = JSON.parse(localStorage.getItem("class"+selectedClass));
  tempClass.seatplan = JSON.parse(sPlan).seatplan;
  localStorage.setItem("class"+selectedClass, JSON.stringify(tempClass));
}

function createStudents(evt){
  //Retrieve the first (and only!) File from the FileList object
  var loadedJsonFile = evt.target.files[0]; 
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    globalStudentsFile = JSON.parse(contents);
    // file validation?
    showStudentsInTable();
    console.log(contents);
  }
  reader.readAsText(loadedJsonFile);
}

window.onload = startupFunctions;