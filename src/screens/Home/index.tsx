import React from 'react';
import { View, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Car from '../../components/Car';

import Logo from "../../assets/logo.svg"

import { Container, Header, HeaderContent, TotalCarsTitle, CarList } from './styles';

export const Home = () => {

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 250
    },
    thumbnail: 'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png'
  }
  

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCarsTitle>
            Total de 12 carros
          </TotalCarsTitle>
        </HeaderContent>
      </Header>

    <CarList
      data={[1,2,3, 4, 5, 6, 7]}
      keyExtractor={item => String(item)}
      renderItem={({item}) => <Car data={carData} />}
      />

    </Container>
  )
}
