var labelTime = document.querySelector("#dateTime");

var dateTime = "";
function setTime(){
    dateTime = setInterval(function () {
        labelTime = moment().format("dddd MMM Do, YYYY HH-mm-ss");
        $("#dateTime").text(labelTime);
        console.log(dateTime);
        console.log(labelTime);
    },1000)
}
setTime();
if($("#nineA").attr("data-hour")<=moment().hours()){
    console.log("late");
}
var myDay = [
  {
      id: "0",
      hour: "09",
      time: "09",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "1",
      hour: "10",
      time: "10",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "2",
      hour: "11",
      time: "11",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "3",
      hour: "12",
      time: "12",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "4",
      hour: "01",
      time: "13",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "5",
      hour: "02",
      time: "14",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "6",
      hour: "03",
      time: "15",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "7",
      hour: "04",
      time: "16",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "8",
      hour: "05",
      time: "17",
      meridiem: "pm",
      reminder: ""
  },
  
]

function saveReminders() {
  localStorage.setItem("myDay", JSON.stringify(myDay));
}

function displayReminders() {
  myDay.forEach(function (_thisHour) {
      $(`#${_thisHour.id}`).val(_thisHour.reminder);
  })
}

function init() {
  var storedDay = JSON.parse(localStorage.getItem("myDay"));

  if (storedDay) {
      myDay = storedDay;
  }

  saveReminders();
  displayReminders();
}


myDay.forEach(function(thisHour) {
  
  var hourRow = $("<form>").attr({
      "class": "row"
  });
  $(".container").append(hourRow);

  
  var hourField = $("<div>")
      .text(`${thisHour.hour}${thisHour.meridiem}`)
      .attr({
          "class": "col-md-2 hour"
  });

  
  var hourPlan = $("<div>")
      .attr({
          "class": "col-md-9 description p-0"
      });
  var planData = $("<textarea>");
  hourPlan.append(planData);
  planData.attr("id", thisHour.id);
  if (thisHour.time < moment().format("HH")) {
      planData.attr ({
          "class": "past", 
      })
  } else if (thisHour.time === moment().format("HH")) {
      planData.attr({
          "class": "present"
      })
  } else if (thisHour.time > moment().format("HH")) {
      planData.attr({
          "class": "future"
      })
  }

  var saveButton = $("<i class='far fa-save fa-lg'></i>")
  var savePlan = $("<button>")
      .attr({
          "class": "col-md-1 saveBtn"
  });
  savePlan.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);
})


init();

$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var saveIndex = $(this).siblings(".description").children(".future").attr("id");
  myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
  console.log(saveIndex);
  saveReminders();
  displayReminders();
})





















