import React, { useEffect, useState, createElement } from 'react';
import { Animated, Easing, StyleSheet, View, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import FastImageComponent, { Source } from "react-native-fast-image";
const AnimatedFastImage = Animated.createAnimatedComponent(FastImageComponent);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
  

export function  Card ({ card, index, scrollY, activeCardIndex, onCardClick })  {
  const [cardHeight, setCardHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const translateY = new Animated.Value(0);

  const promiseFunction = () => {
    return new Promise((resolve) => {
      Animated.timing(translateY, {
        toValue: -(screenHeight - cardHeight - 600 + (index * 1.6) * cardHeight * 0.3),
        duration: 500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
    }).start();
         
    resolve(true);
    });
  }

  useEffect(() => {
    const listenerId = scrollY.addListener(({ value }) => {
      const target = clamp(-value, -index * cardHeight, 0);
      translateY.setValue(target);
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY, cardHeight]);

  useEffect(() => {
    const listenerId = activeCardIndex.addListener(async({ value }) => {
      if (value === -1) {
        Animated.timing(translateY, {
          toValue: clamp(-scrollY._value, -index * cardHeight, 0),
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }).start();
    } else if (value === index) {
        // await 
        await promiseFunction();
        // Wait for 2 seconds
        // console.log("onCardClickProp", onCardClick)
    // setTimeout(() => {onCardClick.execute();}, 2000);
    setTimeout(() => {onCardClick({"activeCardIndex": activeCardIndex, "state": true, "position": -(screenHeight - cardHeight - 600 + (index * 1.6) * cardHeight * 0.3)});}, 2000);
      // onCardClick();
        
    } else {
        await Animated.timing(translateY, {
            toValue: -index * cardHeight * 0.3 + screenHeight * 0.9,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
        }).start();
      }
    });

    return () => {
      activeCardIndex.removeListener(listenerId);
    };
  }, [cardHeight]);

  
function handleTap() {
   if (activeCardIndex._value === -1) {
     activeCardIndex.setValue(activeCardIndex._value === -1 ? index : -1);
   } else {
     // Do nothing
   }
  }
  

  return (
    <TouchableWithoutFeedback onPress={handleTap} >
      <View  >
        <AnimatedFastImage
          source={card}
          onLayout={(event) =>
            setCardHeight(event.nativeEvent.layout.height + 10)
          }
          style={[styles.image,  { transform: [{ translateY }] }]}
          resizeMode={FastImageComponent.resizeMode.stretch}

        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#B387DF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    overflow: 'hidden'
  },
  image: {
    marginTop: -120,
    width: '100%',
    height: 'auto',
    aspectRatio: 343 / 218,
    marginVertical: 5,
    // resizeMode: 'contain',
    // objectFit: 'contain',
  },
});