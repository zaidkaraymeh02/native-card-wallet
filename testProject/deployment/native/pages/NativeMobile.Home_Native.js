import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectListProperty } from "mendix/NanoflowObjectListProperty";
import { NativeStaticImageProperty } from "mendix/NativeStaticImageProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { Button } from "mendix/widgets/native/Button";
import { CheckBox } from "mendix/widgets/native/CheckBox";
import { ConditionalVisibilityWrapper } from "mendix/widgets/native/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/native/Container";
import { DataView } from "mendix/widgets/native/DataView";
import { NativeCardWallet as khaleeji_nativecardwallet_NativeCardWallet } from "../widgets/khaleeji/nativecardwallet/NativeCardWallet";
import { TextBox } from "mendix/widgets/native/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

import NativeMobile$Image_collection$Card_Infinite$png from "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/img/NativeMobile$Image_collection$Card_Infinite.png";

const { $Container, $khaleeji_nativecardwallet_NativeCardWallet, $ConditionalVisibilityWrapper, $DataView, $CheckBox, $TextBox, $Button } = asPluginWidgets({ Container, khaleeji_nativecardwallet_NativeCardWallet, ConditionalVisibilityWrapper, DataView, CheckBox, TextBox, Button });

const placeholder$Main = () => [
    <$Container key="p2.NativeMobile.Home_Native.container5"
        $widgetId="p2.NativeMobile.Home_Native.container5"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
        })}
        onClick={undefined}
        content={[
            <$khaleeji_nativecardwallet_NativeCardWallet key="p2.NativeMobile.Home_Native.nativeCardWallet1"
                $widgetId="p2.NativeMobile.Home_Native.nativeCardWallet1"
                yourName={""}
                cardImage={NativeStaticImageProperty({
                    "image": NativeMobile$Image_collection$Card_Infinite$png
                })}
                infiniteCard={undefined}
                platinumCard={undefined}
                goldCard={undefined}
                classicCard={undefined}
                normalDebitCard={undefined}
                vipDebitCard={undefined}
                buttonAction={ActionProperty({
                    "action": { "type": "callNanoflow", "argMap": { "CardContext": { "widget": "$CardContext", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/nanoflows/NativeMobile.ACT_Card_OnClick").ACT_Card_OnClick }, "disabledDuringExecution": false }
                })}
                data={NanoflowObjectListProperty({
                    "argMap": {},
                    "dataSourceId": "p2.4",
                    "entity": "NativeMobile.Card",
                    "scope": "$CardContext",
                    "source": { "nanoflow": () => require("C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/nanoflows/NativeMobile.DS_GetCards").DS_GetCards }
                })}
                cardContext={NanoflowObjectListProperty({
                    "argMap": { "CardContext": { "widget": "$CardContext", "source": "object" } },
                    "dataSourceId": "p2.5",
                    "entity": "NativeMobile.CardContext",
                    "scope": "$CardContext",
                    "source": { "nanoflow": () => require("C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/nanoflows/NativeMobile.DS_GetCardContext").DS_GetCardContext }
                })}
                content={[
                    <$ConditionalVisibilityWrapper key="p2.NativeMobile.Home_Native.dataView1$visibility"
                        $widgetId="p2.NativeMobile.Home_Native.dataView1$visibility"
                        visible={ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "CardContext", "path": "IsCardSelected" }, "args": { "CardContext": { "widget": "$CardContext", "source": "object" } } }
                        })}
                        contents={[
                            <$DataView key="p2.NativeMobile.Home_Native.dataView1"
                                $widgetId="p2.NativeMobile.Home_Native.dataView1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.DataView ]
                                })}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p2.9",
                                    "scope": "$CardContext",
                                    "editable": true
                                })}
                                content={[
                                    <$CheckBox key="p2.NativeMobile.Home_Native.checkBox1"
                                        $widgetId="p2.NativeMobile.Home_Native.checkBox1"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.CheckBox, styles.CheckBoxVertical ]
                                        })}
                                        formOrientation={"vertical"}
                                        labelWidth={0}
                                        value={AttributeProperty({
                                            "scope": "p2.NativeMobile.Home_Native.dataView1",
                                            "path": "",
                                            "entity": "NativeMobile.CardContext",
                                            "attribute": "IsCardSelected",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                        })}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Is card selected" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"switch"}
                                        screenReaderCaption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        screenReaderHint={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        accessible={true} />,
                                    <$TextBox key="p2.NativeMobile.Home_Native.textBox1"
                                        $widgetId="p2.NativeMobile.Home_Native.textBox1"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.TextBox, styles.TextBoxVertical ]
                                        })}
                                        onEnter={undefined}
                                        onLeave={undefined}
                                        formOrientation={"vertical"}
                                        labelWidth={0}
                                        inputValue={AttributeProperty({
                                            "scope": "p2.NativeMobile.Home_Native.dataView1",
                                            "path": "",
                                            "entity": "NativeMobile.CardContext",
                                            "attribute": "SelectedCardIndex",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {
                                                "numberFormat": {
                                                    "groupDigits": false
                                                }
                                            }
                                        })}
                                        isPassword={false}
                                        placeholder={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        label={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Selected card index" }, "args": {} }
                                            })
                                        ])}
                                        maxLength={undefined}
                                        keyboardType={"number-pad"}
                                        onEnterKeyPress={undefined}
                                        autocomplete={true}
                                        autoFocus={false}
                                        submitWhileEditing={false}
                                        submitDelay={300}
                                        screenReaderCaption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        screenReaderHint={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        accessible={true} />,
                                    <$Button key="p2.NativeMobile.Home_Native.actionButton1"
                                        $widgetId="p2.NativeMobile.Home_Native.actionButton1"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.ActionButton ]
                                        })}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                            })
                                        ])}
                                        icon={undefined}
                                        onClick={ActionProperty({
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p2.NativeMobile.Home_Native.dataView1", "source": "object" } }, "config": { "operationId": "J/0iC+hsZ0qyAhBI/EE0JA", "closePage": true }, "disabledDuringExecution": true }
                                        })}
                                        screenReaderCaption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        screenReaderHint={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        accessible={true} />,
                                    <$Button key="p2.NativeMobile.Home_Native.actionButton2"
                                        $widgetId="p2.NativeMobile.Home_Native.actionButton2"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.ActionButton ]
                                        })}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                            })
                                        ])}
                                        icon={undefined}
                                        onClick={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "EvjA6JFtAkqwi9T/PDgaIA", "closePage": true }, "disabledDuringExecution": true }
                                        })}
                                        screenReaderCaption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        screenReaderHint={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        accessible={true} />
                                ]} />
                        ]} />,
                    <$DataView key="p2.NativeMobile.Home_Native.dataView2"
                        $widgetId="p2.NativeMobile.Home_Native.dataView2"
                        style={NativeStyleProperty({
                            "styles": [ styles.DataView ]
                        })}
                        object={AssociationObjectProperty({
                            "dataSourceId": "p2.22",
                            "scope": "$CardContext",
                            "editable": true
                        })}
                        content={[
                            <$CheckBox key="p2.NativeMobile.Home_Native.checkBox2"
                                $widgetId="p2.NativeMobile.Home_Native.checkBox2"
                                style={NativeStyleProperty({
                                    "styles": [ styles.CheckBox, styles.CheckBoxVertical ]
                                })}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                value={AttributeProperty({
                                    "scope": "p2.NativeMobile.Home_Native.dataView2",
                                    "path": "",
                                    "entity": "NativeMobile.CardContext",
                                    "attribute": "IsCardSelected",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false,
                                    "validation": null
                                })}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Is card selected" }, "args": {} }
                                    })
                                ])}
                                renderMode={"switch"}
                                screenReaderCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                screenReaderHint={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                accessible={true} />,
                            <$TextBox key="p2.NativeMobile.Home_Native.textBox2"
                                $widgetId="p2.NativeMobile.Home_Native.textBox2"
                                style={NativeStyleProperty({
                                    "styles": [ styles.TextBox, styles.TextBoxVertical ]
                                })}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    "scope": "p2.NativeMobile.Home_Native.dataView2",
                                    "path": "",
                                    "entity": "NativeMobile.CardContext",
                                    "attribute": "SelectedCardIndex",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false,
                                    "validation": null,
                                    "formatting": {
                                        "numberFormat": {
                                            "groupDigits": false
                                        }
                                    }
                                })}
                                isPassword={false}
                                placeholder={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                label={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected card index" }, "args": {} }
                                    })
                                ])}
                                maxLength={undefined}
                                keyboardType={"number-pad"}
                                onEnterKeyPress={undefined}
                                autocomplete={true}
                                autoFocus={false}
                                submitWhileEditing={false}
                                submitDelay={300}
                                screenReaderCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                screenReaderHint={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                accessible={true} />,
                            <$Button key="p2.NativeMobile.Home_Native.actionButton3"
                                $widgetId="p2.NativeMobile.Home_Native.actionButton3"
                                style={NativeStyleProperty({
                                    "styles": [ styles.ActionButton ]
                                })}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                    })
                                ])}
                                icon={undefined}
                                onClick={ActionProperty({
                                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p2.NativeMobile.Home_Native.dataView2", "source": "object" } }, "config": { "operationId": "9dFXbcDRoU6RKRwLzsyDpg", "closePage": true }, "disabledDuringExecution": true }
                                })}
                                screenReaderCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                screenReaderHint={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                accessible={true} />,
                            <$Button key="p2.NativeMobile.Home_Native.actionButton4"
                                $widgetId="p2.NativeMobile.Home_Native.actionButton4"
                                style={NativeStyleProperty({
                                    "styles": [ styles.ActionButton ]
                                })}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                    })
                                ])}
                                icon={undefined}
                                onClick={ActionProperty({
                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "yBEZdC9ypkyXeDikfwhXmg", "closePage": true }, "disabledDuringExecution": true }
                                })}
                                screenReaderCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                screenReaderHint={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                accessible={true} />
                        ]} />
                ]}
                style={NativeStyleProperty({
                    "styles": [ styles.khaleeji_nativecardwallet_NativeCardWallet ]
                })} />
        ]}
        accessible={false} />
];

export const $$title = t([
    "Home"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = ["CardContext"];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar();

