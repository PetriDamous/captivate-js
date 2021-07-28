import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

export function muteFunc() {
  const { isToggleMuteUnmute } = fetchGlobal("buttonOptions");

  cpCmndMute = 1;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Mute");
  }
}
