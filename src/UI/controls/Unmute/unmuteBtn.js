import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

export function unmuteFunc() {
  cpCmndMute = 0;

  if (fetchGlobal("isToggleMuteUnmute")) {
    hideMuteUnmute("Unmute");
  }
}
