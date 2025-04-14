import { addEnumerations, t } from "mendix/native";

export const ACT_Homepage_Setup = {
  "name": "NativeMobile.ACT_Homepage_Setup",
  "instructions": [
    {
      "type": "createObject",
      "label": "ad636bb1-65bb-40f9-af00-fcf3264217d2",
      "objectType": "NativeMobile.CardContext",
      "outputVar": "NewCardContext"
    },
    {
      "type": "openForm",
      "label": "3526cb0e-ddf4-4940-8390-1a2623645ab0",
      "path": "NativeMobile.Home_Native",
      "params": {
        "name": "NativeMobile.Home_Native",
        "location": "content"
      },
      "inputArgs": {
        "$CardContext": {
          "type": "variable",
          "variable": "NewCardContext"
        }
      }
    },
    {
      "type": "return",
      "label": "f2bd739e-cc45-4032-9617-ca2676d21beb",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
