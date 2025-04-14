import React, { useState, useEffect, createElement, useRef } from 'react';
import { Animated, StyleSheet, useWindowDimensions, Easing, TouchableWithoutFeedback, View, PanResponder, Text } from 'react-native';
import FastImageComponent from 'react-native-fast-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImageComponent);
function clamp$1(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function Card({
  card,
  index,
  scrollY,
  activeCardIndex
}) {
  const [cardHeight, setCardHeight] = useState(0);
  const {
    height: screenHeight
  } = useWindowDimensions();
  const translateY = new Animated.Value(0);
  useEffect(() => {
    const listenerId = scrollY.addListener(({
      value
    }) => {
      const target = clamp$1(-value, -index * cardHeight, 0);
      translateY.setValue(target);
    });
    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY, cardHeight]);
  useEffect(() => {
    const listenerId = activeCardIndex.addListener(async ({
      value
    }) => {
      if (value === -1) {
        Animated.timing(translateY, {
          toValue: clamp$1(-scrollY._value, -index * cardHeight, 0),
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true
        }).start();
      } else if (value === index) {
        Animated.timing(translateY, {
          toValue: -(screenHeight - cardHeight - 350 + index * 1.6 * cardHeight * 0.3),
          duration: 500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true
        }).start();
      } else {
        await Animated.timing(translateY, {
          toValue: -index * cardHeight * 0.3 + screenHeight * 0.7,
          duration: 500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true
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
    }
  }
  return createElement(TouchableWithoutFeedback, {
    onPress: handleTap
  }, createElement(View, null, createElement(AnimatedFastImage, {
    source: card,
    onLayout: event => setCardHeight(event.nativeEvent.layout.height + 10),
    style: [styles.image, {
      transform: [{
        translateY
      }]
    }],
    resizeMode: FastImageComponent.resizeMode.stretch
  })));
}
const styles = StyleSheet.create({
  container: {
    shadowColor: '#B387DF',
    shadowOffset: {
      width: 0,
      height: 2
    },
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
    marginVertical: 5
    // resizeMode: 'contain',
    // objectFit: 'contain',
  }
});

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
function CardsList(props) {
  const [listHeight, setListHeight] = useState(0);
  const {
    height: screenHeight
  } = useWindowDimensions();
  const activeCardIndex = useRef(new Animated.Value(-1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const maxScrollY = useRef(0);
  const {
    items
  } = props;
  console.log("ITEMS", items);
  useRef(PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      scrollY.setValue(clamp(scrollY._value - gestureState.dy, 0, maxScrollY.current));
    },
    onPanResponderRelease: (_, gestureState) => {
      Animated.decay(scrollY, {
        velocity: -gestureState.vy,
        deceleration: 0.997,
        useNativeDriver: false
      }).start();
    }
  })).current;
  function onLayout(e) {
    setListHeight(e.nativeEvent.layout.height - screenHeight);
    maxScrollY.current = e.nativeEvent.layout.height - screenHeight + 70;
    console.log("maxScrollY", maxScrollY.current);
  }
  return createElement(React.Fragment, null, createElement(View
  // {...panResponder.panHandlers}
  , {
    onLayout: onLayout,
    style: {
      padding: 10,
      paddingTop: 500
    }
  }, items.map((card, index) => createElement(Card, {
    key: index,
    card: props.cardImage.image,
    index: index,
    scrollY: scrollY,
    activeCardIndex: activeCardIndex
  }))));
}

function NativeCardWallet(props) {
  console.log("PROPS", props);
  useEffect(() => {
    console.log("mydata", props.data);
  }, [props.data]);
  // const cards = props.datasource;
  // console.log("ITEMS", cards)
  return createElement(GestureHandlerRootView, {
    style: {
      flex: 1
    }
  }, createElement(SafeAreaProvider, null, createElement(SafeAreaView, {
    style: {
      flex: 1
    }
  }, props.data.status === 'available' ? createElement(CardsList, {
    items: props.data.items ?? [],
    cardImage: {
      type: "staticImage",
      // Static image
      image: props.cardImage.value
    }
  }) : createElement(Text, null, "Loading..."))));
}

export { NativeCardWallet };
