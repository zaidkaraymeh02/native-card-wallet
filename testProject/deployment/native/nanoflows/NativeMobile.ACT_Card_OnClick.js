import { addEnumerations, t } from "mendix/native";

export const ACT_Card_OnClick = {
  "name": "NativeMobile.ACT_Card_OnClick",
  "instructions": [
    {
      "type": "changeObject",
      "label": "3670fe02-1a9d-4c72-a2b5-db96962c1acf",
      "inputVar": "CardContext",
      "member": "IsCardSelected",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "return",
      "label": "73c2e51e-2e4a-4012-ba40-5bd636a9f6e3",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
