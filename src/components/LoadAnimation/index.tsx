import React from 'react';

import LottieView from 'lottie-react-native'

import { Container } from './styles';

import loadingCar from '../../../assets/load_animation.json'

const LoadAnimation: React.FC = () => {
  return (
      <Container>
          <LottieView 
          source={loadingCar}
          autoPlay
          loop
          resizeMode='contain'
          style={{
              width: 140
          }}
          />
      </Container>
  )
}

export default LoadAnimation;