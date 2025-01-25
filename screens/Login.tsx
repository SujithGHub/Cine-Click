import React, { forwardRef, Ref } from 'react';
import { Button, StyleSheet, View, ViewProps } from 'react-native';
import Animated, {
  SlideInLeft,
  SlideOutRight,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming
} from 'react-native-reanimated';

export default function App() {
  const OffsetAnimation = useSharedValue<number>(0);

  const time = 300;
  const delay = 500;
  const offset = 40;

  const handlePress = () => {
    OffsetAnimation.value = withDelay(delay,
      withSequence(
        withTiming(-offset, { duration: time / 2 }),
        withRepeat(withTiming(offset, { duration: time }), 5, true),
        withTiming(0, { duration: time / 2 })
      )
    )
  };

  // const OFFSET = 40;
  // const TIME = 250;
  // const DELAY = 400;

  // const handlePress = () => {
  //   OffsetAnimation.value = withDelay(
  //     DELAY,
  //     withSequence(
  //       // start from -OFFSET
  //       withTiming(-OFFSET, { duration: TIME / 2 }),
  //       // shake between -OFFSET and OFFSET 5 times
  //       withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
  //       // go back to 0 at the end
  //       withTiming(0, { duration: TIME / 2 })
  //     )
  //   );
  // };

  const offsetStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: OffsetAnimation.value }]
  }))


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, offsetStyle]} entering={SlideInLeft} exiting={SlideOutRight}>
      </Animated.View>
      <Button onPress={handlePress} title="Click me" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: '#b58df1',
  }
});
