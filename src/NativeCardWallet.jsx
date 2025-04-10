import { createElement  } from "react";

import { HelloWorld } from "./components/HelloWorld";
import CardsList from "./components/CardsList";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export function NativeCardWallet(props) {
    console.log("PROPS", props)
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>

                <CardsList cardImage={{
                    type: "staticImage", // Static image
                    image: props.cardImage.value,
                }} />
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>

    )
}
