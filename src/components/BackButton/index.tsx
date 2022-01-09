import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import {BorderlessButtonProps} from 'react-native-gesture-handler'


import {
    MaterialIcons
} from '@expo/vector-icons'

import { Container } from './styles';

interface Props extends BorderlessButtonProps {
    color?: string;
}

const BackButton = ({
    color,
    ...rest
}: Props) => {

    const theme = useTheme()

  return (
      <Container {...rest}>
          <MaterialIcons
          name='chevron-left'
          size={24}
          color={color ? color : theme.colors.text}
          />
      </Container>
  )
}

export default BackButton;