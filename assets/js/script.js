// displays time without delay when page loads or on referesh
 $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// sets time to update every second
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// delcared variables
var saveBtn = document.querySelectorAll(".saveBtn");
var timeIds = [0,1,2,3,4,5,6,7,8];

// calls the localStorage Function
localStorageFunction();

// stores the data from the text area into localStorage
function localStorageFunction() {

    for (var index = 0; index < timeIds.length; index++) {
        $(".textArea")[index].value = localStorage.getItem(".textArea" + String(index + 1));
    }
}

// saves the stored data that has been entered into the textarea
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    for (var index = 0; index < timeIds.length; index++) {
        localStorage.setItem('.textArea' + String(index + 1), $(".textArea")[index].value)
    }
});

// updates hourly text area color based on current hour. Grey for pasts hours, red for current hour, and green for future hours
function hourColorFormat() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"))

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}
//calls the function hourColorFormat
hourColorFormat();