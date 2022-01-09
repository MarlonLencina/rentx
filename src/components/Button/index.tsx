import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    onPress: () => void
}

const Button = ({
    title,
    color,
    onPress,
    ...rest
}: Props) => {
  return (
      <Container onPress={onPress} color={color} {...rest}>
        <Title>
            {
                title
            }
        </Title>
      </Container>
  )
}

export default Button;