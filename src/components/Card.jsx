import React, { useEffect, useState, createElement } from 'react';
import { Animated, Easing, StyleSheet, View, TouchableWithoutFeedback, useWindowDimensions, Text } from 'react-native';
import FastImageComponent, { Source } from "react-native-fast-image";

console.log('FastImageComponent:', FastImageComponent);
console.log('typeof FastImageComponent:', typeof FastImageComponent);
console.log('Animated:', Animated);
console.log('Animated.createAnimatedComponent:', Animated.createAnimatedComponent);

const AnimatedFastImage = Animated.createAnimatedComponent(FastImageComponent);



function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
  

export function Card({ card, index, scrollY, activeCardIndex, onCardClick, buttonAction, contextId }) {
  const [cardHeight, setCardHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const translateY = useState(new Animated.Value(0))[0];

  const promiseFunction = () => {
    return new Promise((resolve) => {
      const targetY = screenHeight / 20; // Fixed place you want cards to land
      const currentTop = index * 80 + 90;     // Where the card is currently stacked
      const deltaY = -currentTop; // How much to move
  
      Animated.timing(translateY, {
        toValue: deltaY,
        duration: 700,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start(() => resolve(true));
    });
  };

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
    const listenerId = activeCardIndex.addListener(async ({ value }) => {
      if (value === -1) {
        Animated.timing(translateY, {
          toValue: clamp(-scrollY._value, -index * cardHeight, 0),
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }).start();
      } else if (value === index) {
        const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
        await promiseFunction();
        setTimeout(async () => {
          onCardClick({ activeCardIndex: activeCardIndex, state: true, position: -(index * 80 + 90) });
          AsyncStorage.setItem('activeCardIndex', JSON.stringify(contextId));
          buttonAction.execute();
        }, 200);
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
      activeCardIndex.setValue(index);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <Animated.View style={[
        styles.cardContainer,
        { top: index * 80, transform: [{ translateY }] } // ← stacking by index!
      ]}>
        <AnimatedFastImage
          source={card}
          onLayout={(event) => setCardHeight(event.nativeEvent.layout.height)}
          style={styles.image}
          resizeMode={FastImageComponent.resizeMode.stretch}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute', // absolute stacking
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    aspectRatio: 343 / 218,
    marginVertical: 5,
  },
});

export default Card;