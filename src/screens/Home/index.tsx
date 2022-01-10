import React, { useEffect, useState } from 'react';
import {  StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {Ionicons} from "@expo/vector-icons"

import {useNavigation} from "@react-navigation/native"

import Car from '../../components/Car';

import Logo from "../../assets/logo.svg"

import Load from '../../components/Load';

import { Container, Header, HeaderContent, TotalCarsTitle, CarList, MyCarsButton } from './styles';
import { api } from '../../service/client';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { useTheme } from 'styled-components';

const Home = () => {

  const theme = useTheme()

  const [cars, setCars] = useState<ICarPropsDTO[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<any>()

  const handleCarDetails = (car: ICarPropsDTO) => {
    navigation.navigate("CarDetails", {car})
  }
  
  const handleOpenMyCars = () => {
    navigation.navigate("MyCars")
  }

  useEffect(() => {

    async function loadData(){

      try {

        const response = await api.get("cars")

        setCars(response.data)
        
  
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

    }

    loadData()

  }, [])


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

{
  loading ? <Load/> : 
  <CarList
    data={cars}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Car onPress={() => handleCarDetails(item)} data={item} />}
    />

}


    <MyCarsButton onPress={() => {handleOpenMyCars()}}>
        <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape}/>
    </MyCarsButton>


    </Container>
  )
}

export default Home