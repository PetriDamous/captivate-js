import initialize from "./modules/initialize/initialize";

window.addEventListener("moduleReadyEvent", function (e) {
  //evt.Data carries the interface object.
  //It is same as window.cpAPIInterface
  // var interfaceObj = e.Data;
  // console.log(interfaceObj)
  // var eventEmitterObj = interfaceObj.getEventEmitter();
  // console.log(eventEmitterObj)

  console.log(e);

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {
    $(document).ready(function () {
      // Grabs the list of slides from the project and splits them into an array
      var slides = cp.model.data.project_main.slides.split(",");

      // Current Slide
      var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

      // lastFrame is the last frame for the current slide
      var lastFrame = currentSlide.to;

      // firstFrame is the starting frame
      var firstFrame = currentSlide.from;

      // Checks for audio on slide
      var slideAudioName = currentSlide.audioName;
      initialize();
    });
  });
});
