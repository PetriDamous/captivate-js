import { hideMuteUnmute } from "../../uiFunctions";

export function muteFunc() {
  cpCmndMute = 1;
  hideMuteUnmute("Mute");
}
