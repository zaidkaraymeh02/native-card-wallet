import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { Button } from "mendix/widgets/native/Button";
import { Container } from "mendix/widgets/native/Container";
import { DataView } from "mendix/widgets/native/DataView";
import { Text } from "mendix/widgets/native/Text";
import { TextBox } from "mendix/widgets/native/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/layouts/Atlas_Core.NativePhone_TopBarOnly.js";

import * as styles from "../styles.js";

const { $Container, $DataView, $TextBox, $Text, $Button } = asPluginWidgets({ Container, DataView, TextBox, Text, Button });

const placeholder$Main = () => [
    <$Container key="p1.NativeMobile.Login.container4"
        $widgetId="p1.NativeMobile.Login.container4"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.spacingInnerTopLarger, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.spacingInnerBottomLarger ]
        })}
        onClick={undefined}
        content={[
            <$DataView key="p1.NativeMobile.Login.dataView2"
                $widgetId="p1.NativeMobile.Login.dataView2"
                style={NativeStyleProperty({
                    "styles": [ styles.DataView, styles.spacingOuterTopMedium ]
                })}
                object={NanoflowObjectProperty({
                    "dataSourceId": "p1.4",
                    "editable": true,
                    "source": { "nanoflow": () => require("C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/nanoflows/NativeMobile.DSS_CreateLoginContext").DSS_CreateLoginContext },
                    "argMap": {}
                })}
                content={[
                    <$TextBox key="p1.NativeMobile.Login.textBox3"
                        $widgetId="p1.NativeMobile.Login.textBox3"
                        style={NativeStyleProperty({
                            "styles": [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                        })}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"horizontal"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            "scope": "p1.NativeMobile.Login.dataView2",
                            "path": "",
                            "entity": "NativeMobile.Login",
                            "attribute": "Username",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": { "message": t([ "A valid email address is required." ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            "formatting": { }
                        })}
                        isPassword={false}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Username" }, "args": {} }
                            })
                        ])}
                        label={undefined}
                        maxLength={200}
                        keyboardType={"default"}
                        onEnterKeyPress={undefined}
                        autocomplete={true}
                        autoFocus={true}
                        submitWhileEditing={false}
                        submitDelay={300}
                        accessible={false} />,
                    <$TextBox key="p1.NativeMobile.Login.textBox4"
                        $widgetId="p1.NativeMobile.Login.textBox4"
                        style={NativeStyleProperty({
                            "styles": [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                        })}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"horizontal"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            "scope": "p1.NativeMobile.Login.dataView2",
                            "path": "",
                            "entity": "NativeMobile.Login",
                            "attribute": "Password",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": { "message": t([ "A password is required." ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            "formatting": { }
                        })}
                        isPassword={true}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Password" }, "args": {} }
                            })
                        ])}
                        label={undefined}
                        maxLength={200}
                        keyboardType={"default"}
                        onEnterKeyPress={undefined}
                        autocomplete={true}
                        autoFocus={false}
                        submitWhileEditing={false}
                        submitDelay={300}
                        accessible={false} />,
                    <$Text key="p1.NativeMobile.Login.text6"
                        $widgetId="p1.NativeMobile.Login.text6"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textPrimary, styles.spacingOuterBottomMedium, styles.textSmall ]
                        })}
                        text={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Forgot Password?" }, "args": {} }
                            })
                        ])}
                        accessible={false} />,
                    <$Button key="p1.NativeMobile.Login.actionButton2"
                        $widgetId="p1.NativeMobile.Login.actionButton2"
                        style={NativeStyleProperty({
                            "styles": [ styles.ActionButton ]
                        })}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                            })
                        ])}
                        icon={undefined}
                        onClick={ActionProperty({
                            "action": { "type": "callNanoflow", "argMap": { "Login": { "widget": "p1.NativeMobile.Login.dataView2", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/nanoflows/NativeMobile.ACT_SignInUser").ACT_SignInUser }, "disabledDuringExecution": false }
                        })}
                        accessible={false} />,
                    <$Container key="p1.NativeMobile.Login.container3"
                        $widgetId="p1.NativeMobile.Login.container3"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.flexRow, styles.justifyContentCenter, styles.alignChildrenEnd, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Text key="p1.NativeMobile.Login.text4"
                                $widgetId="p1.NativeMobile.Login.text4"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Text, styles.spacingOuterRightSmall, styles.textSmall, styles.textParagraph ]
                                })}
                                text={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Don't have an account yet?" }, "args": {} }
                                    })
                                ])}
                                accessible={false} />,
                            <$Text key="p1.NativeMobile.Login.text5"
                                $widgetId="p1.NativeMobile.Login.text5"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Text, styles.textPrimary, styles.textSmall ]
                                })}
                                text={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sign up" }, "args": {} }
                                    })
                                ])}
                                accessible={false} />
                        ]}
                        accessible={false} />
                ]} />
        ]}
        accessible={false} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Login"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = [];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar();

