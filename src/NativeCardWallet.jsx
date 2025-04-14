import { createElement, useEffect  } from "react";
import {  Text } from 'react-native';
import CardsList from "./components/CardsList";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export function NativeCardWallet(props) {
    console.log("PROPS", props)
    useEffect(() => {
        console.log("mydata", props.data)
    }, [props.data])
    // const cards = props.datasource;
    // console.log("ITEMS", cards)
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                {props.data.status === 'available' ? 
                    <CardsList items={props.data.items ?? []} cardImage={{
                        type: "staticImage", // Static image
                        image: props.cardImage.value,
                    }} /> : <Text>Loading...</Text>
                 }
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>

    )
}
