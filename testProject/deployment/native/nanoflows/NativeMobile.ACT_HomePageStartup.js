import { addEnumerations, t } from "mendix/native";

export const ACT_HomePageStartup = {
  "name": "NativeMobile.ACT_HomePageStartup",
  "instructions": [
    {
      "type": "createObject",
      "label": "9cec3d99-cfc8-43f7-8eaf-c1b3a5045de0",
      "objectType": "NativeMobile.CardContext",
      "outputVar": "NewCardContext"
    },
    {
      "type": "openForm",
      "label": "dd80f2a8-e223-4802-b2b8-9459e16eaaa7",
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
      "label": "2b995a2c-cd69-41c0-afa9-517d45a7c1e4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
