import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

export function unmuteFunc() {
  const { isToggleMuteUnmute } = fetchGlobal("buttonOptions");

  cpCmndMute = 0;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Unmute");
  }
}
