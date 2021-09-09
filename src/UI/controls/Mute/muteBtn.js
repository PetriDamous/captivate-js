import { hideMuteUnmute } from "../../uiFunctions";
import { isToggleMuteUnmute } from "./muteBtnSettings";

export function muteFunc() {
  cpCmndMute = 1;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Mute");
  }
}
