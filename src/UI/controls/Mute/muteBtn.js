import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

export function muteFunc() {
  cpCmndMute = 1;

  if (fetchGlobal("isToggleMuteUnmute")) {
    hideMuteUnmute("Mute");
  }
}
