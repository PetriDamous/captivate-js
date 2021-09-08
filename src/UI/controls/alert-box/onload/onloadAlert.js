import { addCssRules } from "../../../css/styles";
import { fetchGlobal } from "../../../../global/globalObjFunctions";

export function onloadAlert() {
  adjustAlertCss();
}

function adjustAlertCss() {
  const { isIE } = fetchGlobal("browserType");

  let IEstyles;
  let generalStyles;

  if (isIE) {
    const forIEStyles = {
      RuntimeDialogButtonsHolde_children: [
        ".RuntimeDialogButtonsHolder > * {",
        // Change styles below //

        "position: static !important;",
        "justify-content: center !important;",
        "align-items: center !important;",

        // Change styles above //
        "}",
      ].join(""),
      RuntimeDialogfgPanelDiv_child: [
        ".RuntimeDialogfgPanelDiv > div {",
        // Change styles below //

        "width: 95% !important;",

        // Change styles above //
        "}",
      ].join(""),
      RuntimeDialogCheckBoxAndTextHolder_lastChild: [
        ".RuntimeDialogCheckBoxAndTextHolder > div {",
        // Change styles below //

        "position: static !important;",

        // Change styles above //
        "}",
      ].join(""),
    };
    IEstyles =
      forIEStyles.RuntimeDialogButtonsHolde_children +
      forIEStyles.RuntimeDialogfgPanelDiv_child +
      forIEStyles.RuntimeDialogCheckBoxAndTextHolder_lastChild;
  }

  const forAllStyles = {
    RuntimeDialogCheckBoxAndTextHolder: [
      ".RuntimeDialogCheckBoxAndTextHolder {",
      // Change styles below //

      "align-items: center !important;",

      // Change styles above //
      "}",
    ].join(""),
    RuntimeDialogCheckBoxAndTextHolder_children: [
      ".RuntimeDialogCheckBoxAndTextHolder > * {",
      // Change styles below //

      "margin-left: .8rem !important;",

      // Change styles above //
      "}",
    ].join(""),
  };

  generalStyles =
    forAllStyles.RuntimeDialogCheckBoxAndTextHolder +
    forAllStyles.RuntimeDialogCheckBoxAndTextHolder_children;

  if (isIE) {
    const combinedStyles = IEstyles + generalStyles;
    addCssRules(combinedStyles);
  } else {
    addCssRules(generalStyles);
  }
}
