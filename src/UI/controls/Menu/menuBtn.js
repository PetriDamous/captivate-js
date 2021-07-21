import { getButtonsArray } from "../../uiFunctions";

// Function for Menu button
export function menuFunc() {
  if (disableMenuAction()) return;

  tocCss();

  if (cpCmndTOCVisible === 0) {
    cpCmndTOCVisible = 1;
  } else {
    cpCmndTOCVisible = 0;
  }
}

// Disables menu actions
// Put on menu function
export function disableMenuAction() {
  const slideLabels = ["Pre-Test"];

  return slideLabels.some(
    (slideLabel) => cpInfoCurrentSlideLabel.indexOf() === slideLabel
  );
}

// Adds visual styling for disabled button
// Put on main JS file to read on slide enter
export function disableMenuStyle() {
  // const menuBtn = document.querySelectorAll('div[title="Menu"]');

  // for (let i = 0; i < menuBtn.length; i++) {
  //   const menuItemCanvas = document.getElementById(menuBtn[i].id + "c");
  //   menuItemCanvas.style.opacity = ".5";
  //   menuBtn[i].style.cursor = "not-allowed";
  // }

  const $menuBtns = getButtonsArray("Menu");

  $menuBtns.forEach((menuBtn, idx) => {
    const menuItemCanvas = document.getElementById(menuBtn.id + "c");
    menuItemCanvas.style.opacity = ".5";
    menuBtn.style.cursor = "not-allowed";
  });
}

// Controls Height of TOC when opened
export function tocCss() {
  document.querySelector("#tocFooter").style.top = "585px";
  document.querySelector("#tocContent").style.height = "509px";
  document.querySelector("#toc").style.height = "605px";
}
