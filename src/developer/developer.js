import { keyPress, onEnterMute } from "./developerFunctions";

export function developerOnEnter() {
  document.addEventListener("keydown", keyPress);
  onEnterMute();
}
