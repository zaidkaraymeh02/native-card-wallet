import React, { useState, useRef, createElement, FlatList } from 'react';
import { View, useWindowDimensions, Animated, PanResponder, Text, ScrollView } from 'react-native';
import FastImageComponent, { Source } from "react-native-fast-image";
import { Card } from './Card'; 


function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
  

export function CardsList(props) {
  const [listHeight, setListHeight] = useState(0);
  const [isCardSelected, setIsCardSelected] = useState({ "activateCardIndex": -1, "state":false, "position": 0});
  const { height: screenHeight } = useWindowDimensions();

  const activeCardIndex = useRef(new Animated.Value(-1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const maxScrollY = useRef(0);

  const {items, content, cardContext} = props;

//   console.log("ITEMS", items)
  
//   console.log(`CARD CONTEXT 3:' ${JSON.stringify(cardContext)}`);
//   console.log("CARD CONTEXT 4:");
  
// console.log(Object.keys(cardContext));

//   console.dir(cardContext);
//   for (const key in cardContext) {
//     if (cardContext.hasOwnProperty(key)) {
//       console.log(`CARD CONTEXT 2: ${key}: ${cardContext[key]}`);
//     }
//   }
  

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        scrollY.setValue(
          clamp(scrollY._value - gestureState.dy, 0, maxScrollY.current)
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        Animated.decay(scrollY, {
          velocity: -gestureState.vy,
          deceleration: 0.997,
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  
  function onLayout(e) {
      setListHeight(e.nativeEvent.layout.height - screenHeight);
      maxScrollY.current = e.nativeEvent.layout.height - screenHeight + 70;
      console.log("maxScrollY", maxScrollY.current);
    }
  
  return (
    <>
    <View
    // {...panResponder.panHandlers}
      onLayout={onLayout}
      style={{ padding: 10 }}
    >
    {isCardSelected.state ? (
      <View>
        <Card
          contextId={cardContext.id}
          onCardClick={setIsCardSelected}
          key={isCardSelected.activateCardIndex}
          card={props.cardImage.image}
          index={isCardSelected.activateCardIndex}
          scrollY={scrollY}
          activeCardIndex={activeCardIndex}
        />
          <View style={{marginTop:250}}> 
            {content}
          </View>
        </View>
    ) : items ? (
      items.map((card, index) => (
        <Card
          onCardClick={setIsCardSelected}
          buttonAction={props.onCardClick}
          key={index}
          card={props.cardImage.image}
          index={index}
          scrollY={scrollY}
          activeCardIndex={activeCardIndex}
        />
      ))
    ) : (
      <Text>Loading...</Text>
    )}

     
    </View>
      </>
  );
};

export default CardsList;
