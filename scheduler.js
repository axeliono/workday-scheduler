var currentTime = moment().format("LT");
console.log(currentTime);
var rowAmt = document.getElementsByClassName("hour");
var rowArray = [];
var textArray = [];

//put all row elements into array
rowArray.push($(".row"));

//show current date in Jumbotron
$("#currentDay").text(moment().format("LL"));

//function that goes to every row and compares it's time id with the current time
var checkTime = function(rowItem) {
    rowTime = rowItem.children(".hour").attr("id");

    let time = moment(rowTime, "HH:mm:ss");
    console.log(time);
    if(time.isBefore(moment())) {
        if((time.diff(moment()), 'hours') < 1){
            rowItem.children(".description").addClass("present");
        }
        else {
            rowItem.children(".description").addClass("past");
        }
    }
    else {
        rowItem.children(".description").addClass("future");
    }
};

//function to check each row in array
var checkRowArray = function() {

    for(i = 0; i < rowArray.length; i++) {
        checkTime(rowArray[i]);
        
    }
}

$("textarea").on("blur", function() {
    var id = $(this).attr("index");
    var text = $(this).val().trim();
    console.log("blur in row of index: " + id);
    console.log("text is: " + text);
    textArray[id] = text;
});



$(".saveBtn").click(function() {
    console.log("click");
    localStorage.setItem("savedTasks", textArray);
    console.log(localStorage.getItem("savedTasks"));
    
});

var displaySavedWork = function() {
    textArray.push(localStorage.getItem("savedTasks"));
    for(i = 0; i < textArray.length; i++) {
        $("#" + i).text() = textArray[i];
    }
}

checkRowArray();
displaySavedWork();
