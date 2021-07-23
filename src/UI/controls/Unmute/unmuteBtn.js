import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

export function unmuteFunc() {
  cpCmndMute = 0;

  if (fetchGlobal("isToggleMuteUnmute")) {
    hideMuteUnmute("Unmute");
  }
}
