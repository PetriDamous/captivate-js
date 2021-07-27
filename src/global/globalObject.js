export function setupGlobalObj() {
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  window.cpGlobalObj = {
    browserType: {
      isFirefox: typeof InstallTrigger !== "undefined",
      isIE,
      isEdge: !isIE && !!window.StyleMedia,
      isChrome: navigator.userAgent.toLocaleLowerCase().indexOf("chrome"),
    },
    isCcOnEnter_manual: false,
    isCcDisplay_manual: true,
    isCcOnEnter_auto: false,
    slidesIdArray: [],
    slidesObjArray: [],
    currentSlide: {},
    prevSlide: {},
    isToggleMuteUnmute: true,
    isTogglePausePlay: true,
    nextSlide: {},
  };
}
