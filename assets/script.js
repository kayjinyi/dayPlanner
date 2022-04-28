var labelTime = document.querySelector("#dateTime");

var dateTime = "";
function setTime() {
  dateTime = setInterval(function () {
    labelTime = moment().format("dddd MMM Do, YYYY HH-mm-ss");

    $("#dateTime").text(labelTime);
    // console.log(dateTime);
    // console.log(labelTime);
  }, 1000);
}
//change input
setTime();
const timeNow = moment().hour();
$("textarea").each(function (index) {
  // console.log($(this))
  const id = $(this).attr("id");
  const storage = localStorage.getItem(id);
  console.log(storage);
  if (timeNow > $(this).attr("id")) {
    $(this).parent().addClass("past");
  }
  if (timeNow === $(this).attr("id")) {
    $(this).parent().addClass("present");
  }
  if (timeNow < $(this).attr("id")) {
    $(this).parent().addClass("future");
  }
});
$("button").each(function (index) {
  // console.log($(this))
  $(this).on("click", function (event) {
    const value = $(event.target)
      .parent()
      .siblings("td")
      .children("textarea")
      .val();
    const id = $(event.target)
      .parent()
      .siblings("td")
      .children("textarea")
      .attr("id");
    localStorage.setItem(id, value);
    console.log(value);
  });
});
