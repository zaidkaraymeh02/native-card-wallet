import React, { useEffect, useState, createElement } from 'react';
import { Animated, Easing, StyleSheet, View, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import FastImageComponent, { Source } from "react-native-fast-image";
const AnimatedFastImage = Animated.createAnimatedComponent(FastImageComponent);
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function  Card ({ card, index, scrollY, activeCardIndex })  {
  const [cardHeight, setCardHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const translateY = new Animated.Value(0);

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
        Animated.timing(translateY, {
            toValue: -(screenHeight - cardHeight - 450 + (index * 1.2) * cardHeight * 0.3),
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
        }).start();
    } else {
        await Animated.timing(translateY, {
            toValue: -index * cardHeight * 0.3 + screenHeight * 0.7,
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

  const handleTap = () => {
    activeCardIndex.setValue(activeCardIndex._value === -1 ? index : -1);
  };

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
    marginTop: -150,
    width: '100%',
    height: 'auto',
    aspectRatio: 343 / 218,
    marginVertical: 5,
    // resizeMode: 'contain',
    // objectFit: 'contain',
  },
});

