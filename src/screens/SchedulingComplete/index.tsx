import React from 'react';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { StatusBar, useWindowDimensions } from 'react-native';

import { Container, Content, Title, Message, Footer } from './styles';
import ConfirmButton from '../../components/ConfirmButton';

import {useNavigation} from "@react-navigation/native"

const SchedulingComplete = () => {

    const navigation = useNavigation()

    const {
        width
    } = useWindowDimensions()

    const HandleSchedulingComplete = () => {
        navigation.navigate("Home")
    }

  return (
      <Container>
          <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
        <LogoSvg width={width} />

        <Content>
            <DoneSvg width={80} height={80} />
            <Title>Carro alugado!</Title>
            <Message>
                Agora voce so precisa ir {'\n'}
                ate a concessionaria da rentx {'\n'}
                pegar o seu automovel
            </Message>
        </Content>
        
        <Footer>
            <ConfirmButton onPress={HandleSchedulingComplete} title='OK!' />
        </Footer>
      </Container>
  )
}

export default SchedulingComplete;