import { keyPress } from "./developerFunctions";

export function developerMode() {
  document.addEventListener("keydown", keyPress);
}
