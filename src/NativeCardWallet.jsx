import { createElement } from "react";

import { HelloWorld } from "./components/HelloWorld";
import CardsList from "./components/CardsList";

export function NativeCardWallet(props) {
    console.log("PROPS", props)
    return <CardsList cardImage={{
        type: "staticImage", // Static image
        image: props.cardImage.value,
    }} />;
}
