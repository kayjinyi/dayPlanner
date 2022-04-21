var labelTime = document.querySelector("#dateTime");

var dateTime = "";
function setTime(){
    dateTime = setInterval(function () {
        labelTime = moment().format("dddd MMM Do, YYYY HH-mm-ss");

        $("#dateTime").text(labelTime);
        // console.log(dateTime);
        // console.log(labelTime);
    },1000)
}
setTime();
const timeNow = moment().hour();
$('textarea').each(function(index){
    // console.log($(this))
    const id =  $(this).attr("id");
    const storage = localStorage.getItem(id);
    console.log(storage);
    if(timeNow > $(this).attr("id")){
        $(this).parent().addClass("past")
    }
})
$('button').each(function(index){
    // console.log($(this))
    $(this).on("click",function(event){
       const value = $(event.target).parent().siblings('td').children('textarea').val()
       const id = $(event.target).parent().siblings('td').children('textarea').attr("id");
       localStorage.setItem(id, value);
       console.log(value);
    })
})

// var myDay = [
//   {
//       id: "0",
//       hour: "09",
//       time: "09",
//       amOrpm: "am",
//       reminder: ""
//   },
//   {
//       id: "1",
//       hour: "10",
//       time: "10",
//       amOrpm: "am",
//       reminder: ""
//   },
//   {
//       id: "2",
//       hour: "11",
//       time: "11",
//       amOrpm: "am",
//       reminder: ""
//   },
//   {
//       id: "3",
//       hour: "12",
//       time: "12",
//       amOrpm: "pm",
//       reminder: ""
//   },
//   {
//       id: "4",
//       hour: "01",
//       time: "13",
//       amOrpm: "pm",
//       reminder: ""
//   },
//   {
//       id: "5",
//       hour: "02",
//       time: "14",
//       amOrpm: "pm",
//       reminder: ""
//   },
//   {
//       id: "6",
//       hour: "03",
//       time: "15",
//       amOrpm: "pm",
//       reminder: ""
//   },
//   {
//       id: "7",
//       hour: "04",
//       time: "16",
//       amOrpm: "pm",
//       reminder: ""
//   },
//   {
//       id: "8",
//       hour: "05",
//       time: "17",
//       amOrpm: "pm",
//       reminder: ""
//   },
  
// ]

// function saveReminders() {
//   localStorage.setItem("myDay", JSON.stringify(myDay));
// }

// function displayReminders() {
//   myDay.forEach(function (_thisHour) {
//       $(`#${_thisHour.id}`).val(_thisHour.reminder);
//   })
// }

// function init() {
//   var storedDay = JSON.parse(localStorage.getItem("myDay"));

//   if (storedDay) {
//       myDay = storedDay;
//   }

//   saveReminders();
//   displayReminders();
// }


// myDay.forEach(function(thisHour) {
  
//   var hourRow = $("<form>").attr({
//       "class": "row"
//   });
//   $(".container").append(hourRow);

  
//   var hourField = $("<div>")
//       .text(`${thisHour.hour}${thisHour.amOrpm}`)
//       .attr({
//           "class": "col-md-2 hour"
//   });

  
//   var hourPlan = $("<div>")
//       .attr({
//           "class": "col-md-9 description p-0"
//       });
//   var planData = $("<textarea>");
//   hourPlan.append(planData);
//   planData.attr("id", thisHour.id);
//   if (thisHour.time < moment().format("HH")) {
//       planData.attr ({
//           "class": "past", 
//       })
//   } else if (thisHour.time === moment().format("HH")) {
//       planData.attr({
//           "class": "present"
//       })
//   } else if (thisHour.time > moment().format("HH")) {
//       planData.attr({
//           "class": "future"
//       })
//   }

//   var saveButton = $("<i class='far fa-save fa-lg'></i>")
//   var savePlan = $("<button>")
//       .attr({
//           "class": "col-md-1 saveBtn"
//   });
//   savePlan.append(saveButton);
//   hourRow.append(hourField, hourPlan, savePlan);
// })


// init();

// $(".saveBtn").on("click", function(event) {
//   event.preventDefault();
//   var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//   myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
//   console.log(saveIndex);
//   saveReminders();
//   displayReminders();
// })





















