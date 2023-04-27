import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';

const LogoAnimation = ({ navigation }) => {
  const logoScale = useRef(new Animated.Value(0.01)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          navigation.navigate('SignIn');
        }, 1500);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[
          styles.logo,
          { opacity: logoOpacity },
          { transform: [{ scale: logoScale }] },
        ]}
        source={require('../../assets/Logo/Logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 450,
  },
});

export default LogoAnimation;
