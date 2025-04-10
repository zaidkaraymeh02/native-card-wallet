import { createElement } from "react";
const React = { createElement };

import { NativeStaticImageProperty } from "mendix/NativeStaticImageProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { Container } from "mendix/widgets/native/Container";
import { NativeCardWallet as khaleeji_nativecardwallet_NativeCardWallet } from "../widgets/khaleeji/nativecardwallet/NativeCardWallet";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

import NativeMobile$Image_collection$Card_Infinite$png from "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/deployment/native/img/NativeMobile$Image_collection$Card_Infinite.png";

const { $Container, $khaleeji_nativecardwallet_NativeCardWallet } = asPluginWidgets({ Container, khaleeji_nativecardwallet_NativeCardWallet });

const placeholder$Main = () => [
    <$Container key="p1.NativeMobile.Home_Native.container5"
        $widgetId="p1.NativeMobile.Home_Native.container5"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
        })}
        onClick={undefined}
        content={[
            <$khaleeji_nativecardwallet_NativeCardWallet key="p1.NativeMobile.Home_Native.nativeCardWallet1"
                $widgetId="p1.NativeMobile.Home_Native.nativeCardWallet1"
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

export const $$parameters = [];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar();

