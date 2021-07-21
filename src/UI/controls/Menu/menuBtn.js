import { disableSlidesArray } from "./menuSettings";
import { getButtonsArray } from "../../uiFunctions";

// Function for Menu button
export function menuFunc() {
  if (disableMenu()) return;

  if (cpCmndTOCVisible === false) {
    cpCmndTOCVisible = true;
  } else {
    cpCmndTOCVisible = false;
  }
}

// Disables menu actions
// Put on menu function
export function disableMenu() {
  return disableSlidesArray.some(
    (slideLabel) => cpInfoCurrentSlideLabel === slideLabel
  );
}

// Adds visual styling for disabled button
// Put on main JS file to read on slide enter
export function disableMenuStyle() {
  if (!disableMenu()) return;

  const $menuBtns = getButtonsArray("Menu");

  $menuBtns.forEach((menuBtn) => {
    const $menuCanvas = document.getElementById(`${menuBtn.id}c`);
    const $menuCanvasParent = document.getElementById(`re-${menuBtn.id}c`);
    $menuCanvas.style.opacity = ".5";
    menuBtn.style.cursor = "not-allowed";
    $menuCanvas.style.cursor = "not-allowed";
    $menuCanvasParent.style.cursor = "not-allowed";
  });
}
