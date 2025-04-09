import { addEnumerations, t } from "mendix/native";

export const DS_GetCards = {
  "name": "NativeMobile.DS_GetCards",
  "instructions": [
    {
      "type": "createObject",
      "label": "f6f1e697-8d08-44ce-ae23-eda22b09ace7",
      "objectType": "NativeMobile.Cards",
      "outputVar": "NewCards"
    },
    {
      "type": "commitObjects",
      "operationId": "nuKPKYVSxEqDUUB7BlKSPg",
      "inputVar": "NewCards"
    },
    {
      "type": "createObject",
      "label": "aeceb562-5a5d-4da4-a421-d33920ddc7c6",
      "objectType": "NativeMobile.Card",
      "outputVar": "NewCard"
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard",
      "member": "CardNumber",
      "value": {
        "type": "literal",
        "value": "1234 5678 9012 3456"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard",
      "member": "CVV",
      "value": {
        "type": "literal",
        "value": "123"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard",
      "member": "ExpiryDate",
      "value": {
        "type": "literal",
        "value": "12/26"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard",
      "member": "NameOnCard",
      "value": {
        "type": "literal",
        "value": "Zaid Karaymeh"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard",
      "member": "NativeMobile.Card_Cards",
      "value": {
        "type": "variable",
        "variable": "NewCards"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "2X2q7djlqE+XYbsbvUR7GA",
      "inputVar": "NewCard"
    },
    {
      "type": "createObject",
      "label": "3f5758e2-37cf-41ef-8f5a-36f58c1c7958",
      "objectType": "NativeMobile.Card",
      "outputVar": "NewCard_1"
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_1",
      "member": "CardNumber",
      "value": {
        "type": "literal",
        "value": "1234 5678 9012 3456"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_1",
      "member": "CVV",
      "value": {
        "type": "literal",
        "value": "123"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_1",
      "member": "ExpiryDate",
      "value": {
        "type": "literal",
        "value": "12/26"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_1",
      "member": "NameOnCard",
      "value": {
        "type": "literal",
        "value": "Zaid Karaymeh"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_1",
      "member": "NativeMobile.Card_Cards",
      "value": {
        "type": "variable",
        "variable": "NewCards"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "NEpNWfiC/USE/gSG6/drIA",
      "inputVar": "NewCard_1"
    },
    {
      "type": "createObject",
      "label": "537f3805-55a6-44c2-948d-04403ae727a1",
      "objectType": "NativeMobile.Card",
      "outputVar": "NewCard_2"
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_2",
      "member": "CardNumber",
      "value": {
        "type": "literal",
        "value": "1234 5678 9012 3456"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_2",
      "member": "CVV",
      "value": {
        "type": "literal",
        "value": "123"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_2",
      "member": "ExpiryDate",
      "value": {
        "type": "literal",
        "value": "12/26"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_2",
      "member": "NameOnCard",
      "value": {
        "type": "literal",
        "value": "Zaid Karaymeh"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_2",
      "member": "NativeMobile.Card_Cards",
      "value": {
        "type": "variable",
        "variable": "NewCards"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "S40O2UVwQE+3lXxhq8KV8w",
      "inputVar": "NewCard_2"
    },
    {
      "type": "createObject",
      "label": "7b8efaf2-c13e-406b-8d46-692974cba7ec",
      "objectType": "NativeMobile.Card",
      "outputVar": "NewCard_3"
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_3",
      "member": "CardNumber",
      "value": {
        "type": "literal",
        "value": "1234 5678 9012 3456"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_3",
      "member": "CVV",
      "value": {
        "type": "literal",
        "value": "123"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_3",
      "member": "ExpiryDate",
      "value": {
        "type": "literal",
        "value": "12/26"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_3",
      "member": "NameOnCard",
      "value": {
        "type": "literal",
        "value": "Zaid Karaymeh"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewCard_3",
      "member": "NativeMobile.Card_Cards",
      "value": {
        "type": "variable",
        "variable": "NewCards"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "WznqzEjUaU6bpTR2dTH6HA",
      "inputVar": "NewCard_3"
    },
    {
      "type": "associationRetrieve",
      "label": "cc8fb772-ed08-4f7c-b792-cad12b3499a0",
      "inputVar": "NewCards",
      "association": "NativeMobile.Card_Cards",
      "direction": "reverse",
      "entity": "NativeMobile.Card",
      "retrieveSingleObject": false,
      "outputVar": "CardList"
    },
    {
      "type": "return",
      "label": "20a98df7-df8e-49d2-9b77-d95c944d0962",
      "result": {
        "type": "variable",
        "variable": "CardList"
      },
      "resultKind": "list"
    }
  ]
};
