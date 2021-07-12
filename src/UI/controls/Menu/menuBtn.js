// Function for Menu button
export function menuFunc() {
  if (disableMenuAction()) return;

  menuCss();

  if (cpCmndTOCVisible === 0) {
    cpCmndTOCVisible = 1;
  } else {
    cpCmndTOCVisible = 0;
  }
}

// Disables menu actions
// Put on menu function
export function disableMenuAction() {
  var slideLabels = ["Pre-Test"];

  return slideLabels.some(function (slideLabel) {
    return cpInfoCurrentSlideLabel.indexOf() !== -1;
  });
}

// Adds visual styling for disabled button
// Put on main JS file to read on slide enter
export function disableMenuStyle() {
  var menuBtn = document.querySelectorAll('div[title="Menu"]');
  for (var i = 0; i < menuBtn.length; i++) {
    var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");
    menuItemCanvas.style.opacity = ".5";
    menuBtn[i].style.cursor = "not-allowed";
  }
}

// Controls Height of TOC when opened
export function menuCss() {
  document.querySelector("#tocFooter").style.top = "585px";
  document.querySelector("#tocContent").style.height = "509px";
  document.querySelector("#toc").style.height = "605px";
}
