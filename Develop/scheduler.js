var currentTime = moment().format("LT");
console.log(currentTime);
var rowArray = [];
rowArray = $(".container").children("hour");

//show current date in Jumbotron
$("#currentDay").text(moment().format("LL"));


rowArray.forEach(checkTime);


var checkTime = function() {
    let time = moment(rowItem.text())
    console.log(time);
    if(time.isBefore(moment())) {
        rowItem.addClass("past");
    }
};