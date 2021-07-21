import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

export function unmuteFunc() {
  const isToggleMuteUnmute = fetchGlobal("isToggleMuteUnmute ");

  cpCmndMute = 0;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Unmute");
  }
}
