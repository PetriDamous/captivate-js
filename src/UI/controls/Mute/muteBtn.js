import { hideMuteUnmute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

export function muteFunc() {
  const isToggleMuteUnmute = fetchGlobal("isToggleMuteUnmute ");

  cpCmndMute = 1;

  if (isToggleMuteUnmute) {
    hideMuteUnmute("Mute");
  }
}
