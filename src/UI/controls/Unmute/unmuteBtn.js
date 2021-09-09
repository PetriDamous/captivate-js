import { hideMuteUnmute } from "../../uiFunctions";
import { isToggleMuteUnmute } from "../MuteUnmute/muteUnmuteSettings";

export function unmuteFunc() {
  cpCmndMute = 0;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Unmute");
  }
}
