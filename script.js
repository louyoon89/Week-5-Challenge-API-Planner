/*date at the top of the page "day, xxxxx*/
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// use provided classes/ids/moment timeblock, hour, past/present/future
//create save button to local storage
// target siblings (children vs sibling)
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  var data = $(this).siblings(".input").val(); 
  var time = $(this).siblings(".hour").text();
  localStorage.setItem(time, data);
});
function saveData() {
  $(".hour").each(function () {
    var inputHour = $(this).text();
    var inputData = localStorage.getItem(inputHour);

    if (inputData !== null) {
      $(this).siblings(".input").val(inputData); 
    }
  });
}

// if to get past present future
// change ids value in html : compare to current time = parse get Int
function timeColor() {
  var hour = moment().hours();
  $(".time-block").each(function () {
    var currentTime = parseInt($(this).attr("id")); 
    if (currentTime < hour) {
      $(this).addClass("past");
    } else if (currentTime === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}


timeColor();
saveData();
