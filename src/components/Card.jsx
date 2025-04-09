import React, { useEffect, useState, createElement } from 'react';
import { Animated, Easing, StyleSheet, View, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Card = ({ card, index, scrollY, activeCardIndex }) => {
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
    const listenerId = activeCardIndex.addListener(({ value }) => {
      if (value === -1) {
        Animated.timing(translateY, {
          toValue: clamp(-scrollY._value, -index * cardHeight, 0),
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }).start();
      } else if (value === index) {
        Animated.timing(translateY, {
          toValue: -index * cardHeight,
          duration: 500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(translateY, {
          toValue: -index * cardHeight * 0.9 + screenHeight * 0.7,
          duration: 500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
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
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.container}>
        <Animated.Image
          source={"C:\\Users\\zf_karaymeh\\Projects\\nativeCardWallet\\src\\assets\\Card 7.png"}
          onLayout={(event) =>
            setCardHeight(event.nativeEvent.layout.height + 10)
          }
          style={[styles.image, { transform: [{ translateY }] }]}
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
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 7 / 4,
    marginVertical: 5,
  },
});

export default Card;
