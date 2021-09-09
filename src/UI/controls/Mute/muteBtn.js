import { hideMuteUnmute } from "../../uiFunctions";
import { isToggleMuteUnmute } from "../MuteUnmute/muteUnmuteSettings";

export function muteFunc() {
  cpCmndMute = 1;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Mute");
  }
}
