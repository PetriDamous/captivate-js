import { hideMuteUnmute } from "../../uiFunctions";

export function unmuteFunc() {
  cpCmndMute = 0;
  hideMuteUnmute("Unmute");
}
