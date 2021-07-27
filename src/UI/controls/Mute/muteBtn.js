import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

export function muteFunc() {
  cpCmndMute = 1;

  if (fetchGlobal("isToggleMuteUnmute")) {
    hideMuteUnmute("Mute");
  }
}
