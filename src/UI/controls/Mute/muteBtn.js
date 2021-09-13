import { hideMuteUnmute } from "../../uiFunctions";
import { isToggleMuteUnmute } from "../MuteUnmute/muteUnmuteSettings";

let muted = 1;

export function muteFunc() {
  cpCmndMute = muted;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Mute");
  }
}
