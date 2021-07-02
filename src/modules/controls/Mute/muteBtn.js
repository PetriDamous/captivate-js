import { hideMuteUnmute } from "../globalButton";

export function muteFunc() {
  cpCmndMute = 1;
  hideMuteUnmute("Mute");
}
