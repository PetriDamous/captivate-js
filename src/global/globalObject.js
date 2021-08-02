const isIE = /*@cc_on!@*/ false || !!document.documentMode;

export function setupGlobalObj() {
  window.cpGlobalObj = {
    browserType: {
      isFirefox: typeof InstallTrigger !== "undefined",
      isIE,
      isEdge: !isIE && !!window.StyleMedia,
      isChrome: navigator.userAgent.toLocaleLowerCase().indexOf("chrome"),
    },
    slideData: {
      slidesIdArray: [],
      slidesObjArray: [],
      currentSlide: {},
      prevSlide: {},
      nextSlide: {},
      videoSlides: [],
      viewedVideoSlides: [],
    },
    ccOptions: {
      isCcOnEnter_manual: false,
      isCcDisplay_manual: true,
      isCcOnEnter_auto: false,
    },
    buttonOptions: {
      isToggleMuteUnmute: true,
      isTogglePausePlay: true,
    },
    timerOptions: {
      isTimer: true,
      isDurationTime: true,
      isCurrentTime: true,
    },
  };
}
