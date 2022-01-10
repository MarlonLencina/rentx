import React, { useEffect } from 'react';

import { Container } from './styles';

import { useNavigation } from '@react-navigation/native';

import BrandSvg from "../../assets/brand.svg"
import LogoSvg from "../../assets/logo.svg"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolate, Extrapolate, runOnJS } from 'react-native-reanimated';

const Splash: React.FC = () => {

    const navigation = useNavigation<any>()

    const splashAnimation = useSharedValue(0)

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value, 
                [0, 50], 
                [1, 0],
                ),
                translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [0, -50],
                    Extrapolate.CLAMP)
            
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value, 
                [0, 50], 
                [0, 1],
                ),
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP)
                
        }
    })

    const startApp = () => {
        navigation.navigate("Home")
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, {
                duration: 1000
            }, () => {
                'worklet'
                runOnJS(startApp)()
            }
        )
    }, [])

  return (
      <Container>

        <Animated.View style={[brandStyle, {
            position: 'absolute'
        }]} >
            <BrandSvg height={50} width={80}/>
        </Animated.View>

        <Animated.View style={logoStyle} > 
            <LogoSvg height={20} width={180}/>
        </Animated.View>

      </Container>
  )
}

export default Splash;