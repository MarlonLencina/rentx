import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container, Name } from './styles';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

const Acessory = ({
    name,
    icon: Icon
}: Props) => {
  return (
      <Container>
          <Icon width={32} height={32}/>
          <Name>{name}</Name>
      </Container>
  )
}

export default Acessory;