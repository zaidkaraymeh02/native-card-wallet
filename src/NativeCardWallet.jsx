import { createElement, useEffect  } from "react";
import {  Text, View } from 'react-native';
import CardsList from "./components/CardsList";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export function NativeCardWallet(props) {
    console.log("PROPS", props)
    useEffect(() => {
        console.log("mydata", props.data)
        console.log("loadedCardContext", props.cardContext)
    }, [props.data, props.cardContext, props.content])
    // const cards = props.datasource;
    // console.log("ITEMS", cards)
    // console.log(props.)

 
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
                {props.data.status === 'available' && props.cardContext.status === 'available' && props.content? 
                    <CardsList  content={props.content} onCardClick={props.buttonAction} items={props.data.items} cardImage={{
                        type: "staticImage", // Static image
                        image: props.cardImage.value,
                    }} 
                    cardContext={props.cardContext.items[0]}
                    />
                    : <Text>Loading...</Text>
                 }
        </GestureHandlerRootView>

    )
}
