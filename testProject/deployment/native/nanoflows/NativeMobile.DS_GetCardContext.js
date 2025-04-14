import { addEnumerations, t } from "mendix/native";

export const DS_GetCardContext = {
  "name": "NativeMobile.DS_GetCardContext",
  "instructions": [
    {
      "type": "setVariable",
      "label": "2accead4-4c21-423d-a93b-763731b3ecc2",
      "value": {
        "type": "function",
        "name": "_newList",
        "parameters": []
      },
      "outputVar": "CardContextList",
      "outputKind": "list"
    },
    {
      "type": "setVariable",
      "label": "06c31ef9-58dc-45c4-9c8c-45e08a0187ab",
      "value": {
        "type": "function",
        "name": "_addToList",
        "parameters": [
          {
            "type": "variable",
            "variable": "CardContextList"
          },
          {
            "type": "variable",
            "variable": "CardContext"
          }
        ]
      },
      "outputVar": "CardContextList",
      "outputKind": "list"
    },
    {
      "type": "return",
      "label": "8efcb392-170e-4c1f-a201-65ee00a23f94",
      "result": {
        "type": "variable",
        "variable": "CardContextList"
      },
      "resultKind": "list"
    }
  ]
};
