import React, { useState, useRef, createElement, FlatList } from 'react';
import { View, useWindowDimensions, Animated, PanResponder, Text } from 'react-native';
import FastImageComponent, { Source } from "react-native-fast-image";
import { Card } from './Card'; // Assuming Card is in the same directory
// const cards = [
//   require('../assets/Card 1.png'),
//   require('../assets/Card 2.png'),
//   require('../assets/Card 3.png'),
//   require('../assets/Card 4.png'),
//   require('../assets/Card 5.png'),
//   require('../assets/Card 6.png'),
//   require('../assets/Card 7.png'),
//   require('../assets/Card 8.png'),
//   require('../assets/Card 9.png'),
// ];


function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
  

export function CardsList(props) {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();

  const activeCardIndex = useRef(new Animated.Value(-1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const maxScrollY = useRef(0);

  const {items} = props;
  console.log("ITEMS", items)

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
      style={{ padding: 10, paddingTop: 500 }}
    >
    {/* <Text>{JSON.stringify(props, null, 2)}</Text> */}

    {/* <FlatList 
      data={items}
      renderItem={({ item }) => (
        <Text>{{item}}</Text>
        // <FastImageComponent
        //   source={item.image}
        //   resizeMode={"contain"}
        //   style={{ width: 100, height: 100 }}
        // />
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    /> */}
    {items.map((card, index) => (
        <Card
          key={index}
          card={props.cardImage.image}
          index={index}
          scrollY={scrollY}
          activeCardIndex={activeCardIndex}
        />
      ))}
    {/* <Card
      key={1}
      card={props.cardImage.image}
      index={1}
      scrollY={scrollY}
      activeCardIndex={activeCardIndex}
    />
    
    <Card
      key={2}
      card={props.cardImage.image}
      index={2}
      scrollY={scrollY}
      activeCardIndex={activeCardIndex}
    />
    
    <Card
      key={3}
      card={props.cardImage.image}
      index={3}
      scrollY={scrollY}
      activeCardIndex={activeCardIndex}
    />
    <Card
      key={4}
      card={props.cardImage.image}
      index={4}
      scrollY={scrollY}
      activeCardIndex={activeCardIndex}
    /> */}
    
      {/* {cards.map((card, index) => (
        <Card
          key={index}
          card={props.cardImage.image}
          index={index}
          scrollY={scrollY}
          activeCardIndex={activeCardIndex}
        />
      ))} */}
    </View>
    {/* <FastImageComponent
                // testID={`${name}$Image`} // Broken because of https://github.com/DylanVann/react-native-fast-image/issues/221
                source={props.cardImage.image}
                resizeMode={"contain"}
                // style={[
                //     initialDimensions?.aspectRatio ? { aspectRatio: +initialDimensions.aspectRatio?.toFixed(2) } : {},
                //     width && height ? { width, height } : {},
                //     imageStyles
                // ]}
                style={[
                    { width: 100, height: 100 }
                ]}
            />
    <FastImageComponent
                // testID={`${name}$Image`} // Broken because of https://github.com/DylanVann/react-native-fast-image/issues/221
                source={props.cardImage.image}
                resizeMode={"contain"}
                // style={[
                //     initialDimensions?.aspectRatio ? { aspectRatio: +initialDimensions.aspectRatio?.toFixed(2) } : {},
                //     width && height ? { width, height } : {},
                //     imageStyles
                // ]}
                style={[
                    { width: 100, height: 100 }
                ]}
            /> */}
      </>
  );
};

export default CardsList;
