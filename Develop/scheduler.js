var currentTime = moment().format("LT");
console.log(currentTime);
var rowAmt = document.getElementsByClassName("hour");
var rowArray = [];
var DescriptionList = {};

//put all row elements into array
rowArray.push($(".row"));

var descriptionArray = []
descriptionArray.push($(".description"));

for()

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

$(".description").click(function() {
    var text = $(this).text()
    var textInput = $("<textarea>")
        .addClass("text-input")
        .val(text);

    $(this).replacewith(textInput)
    textInput.trigger("focus");
    console.log("this is the text: " + text);
    
})

checkRowArray();