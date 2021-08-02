/////////////////////// Timer //////////////////////////////////////////////

if (isTimer) {
  ///////////// Duration Time ///////////////////

  // Creates Duration time
  var durationTime = document.createElement("div");

  durationTime.id = "duration-time";
  durationTime.style.position = durationTimePos;
  durationTime.style.top = durationTimeTop;
  durationTime.style.left = durationTimeLeft;
  durationTime.style.color = durationTimeColor;
  durationTime.style.zIndex = 3000;

  $("#div_Slide").append(durationTime);

  setDuration();

  ///////////// Current Time ///////////////////

  // Current time variables
  var timeInSeconds;
  var fps = cpInfoFPS;
  var timeHrs = 0;
  var timeMin = 0;
  var timeSec = 0;

  // Creates Current time
  var currentTime = document.createElement("div");

  currentTime.id = "current-time";
  currentTime.style.position = currentTimePos;
  currentTime.style.top = currentTimeTop;
  currentTime.style.left = currentTimeLeft;
  currentTime.style.color = currentTimeColor;
  currentTime.style.zIndex = 3000;

  $("#div_Slide").append(currentTime);

  // Event and functions that control current time timer
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    getTimeStamp,
    "cpInfoCurrentFrame"
  );
}
