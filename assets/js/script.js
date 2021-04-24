// displays time without delay when page loads or on referesh
 $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// sets time to update every second
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// delcared variables
var createContainer = $(".container");
var saveButton = document.querySelectorAll("button");
var timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// for loop repeats through the timeList and timeId arrays and appends the data 
for (var i = 0; i < timeList.length; i++) {
    var createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    var createTime = $("<div class='hour col-1'>")


    // creates the text area
    var createTextArea = $("<textarea class='col-10'>");
    createTextArea.attr("id", timeList[i]);

    // creates the buttons
    var createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    // appends the created row to the container
    createContainer.append(createRow);
    // creates the timeList and appends rows 1-8 starting from 9am and ending at 5pm
    createTime.text(timeList[i]);
    createRow.append(createTime);

    // creates the text area for user input
    // createTextArea.text();
    createRow.append(createTextArea);

    // creates the buttons from 9am to 5pm
    createButton.text();
    createRow.append(createButton);
}

    // calls the localStorage Function
    localStorageFunction();

// stores the data from the text area into localStorage
function localStorageFunction() {

    for (var index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

// saves the stored data that has been entered into the textarea
$("button").on("click", function (event) {
    event.preventDefault();

    for (var index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

// updates hourly text area color based on current hour. Grey for pasts hours, red for current hour, and green for future hours
function updateByTheHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//calls the function updateByTheHour
updateByTheHour();