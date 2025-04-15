import { addEnumerations, t } from "mendix/native";

export const DS_GetCardContext = {
  "name": "NativeMobile.DS_GetCardContext",
  "instructions": [
    {
      "type": "setVariable",
      "label": "a5c74d58-6c8e-4645-b518-271557267f14",
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
      "label": "275c3200-0182-4a5f-b945-b9d942a701fd",
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
      "label": "b4bf6f52-b606-44d5-ae59-932262dbbf7a",
      "result": {
        "type": "variable",
        "variable": "CardContextList"
      },
      "resultKind": "list"
    }
  ]
};
