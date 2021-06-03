import { hideMuteUnmute } from "../globalButton";

export function unmuteFunc() {
  cpCmndMute = 0;
  hideMuteUnmute("Unmute");
}
