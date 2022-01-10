import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    enabled?: boolean;
    onPress: () => void;
    loading?: boolean;
}

const Button = ({
    title,
    color,
    enabled = true,
    loading = false,
    onPress,
    ...rest
}: Props) => {

    const theme = useTheme()

  return (
      <Container enabled={enabled} onPress={onPress} color={color} {...rest}
      style={{
          opacity: (enabled === false || loading === true) ? .5 : 1
      }}
      >
          {
            loading ? <ActivityIndicator color={theme.colors.shape}/> :  
            <Title>
            {
                title
            }
        </Title>
          }

      </Container>
  )
}

export default Button;