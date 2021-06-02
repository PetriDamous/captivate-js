///////////// Used to check for browser type ////////////////////////////////
var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = navigator.webkitGetUserMedia;

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
