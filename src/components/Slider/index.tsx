import React from 'react';
import { View } from 'react-native';

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface Props {
    imagesUrl: string[]
}

const Slider = ({
    imagesUrl
}: Props) => {
  return (
      <Container>
        <ImageIndexes>
                <ImageIndex active={true} ></ImageIndex>
                <ImageIndex active={false} ></ImageIndex>
                <ImageIndex active={false} ></ImageIndex>
                <ImageIndex active={false} ></ImageIndex>
        </ImageIndexes>

        <CarImageWrapper>
            <CarImage 
            source={{ uri: imagesUrl[0]}}
            resizeMode='contain'
            />
        </CarImageWrapper>
      </Container>
  )
}

export default Slider;