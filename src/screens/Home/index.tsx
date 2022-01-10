import React, { useEffect, useState } from 'react';
import {  BackHandler, StatusBar, StyleSheet } from 'react-native';
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

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import theme from '../../styles/theme';
import LoadAnimation from '../../components/LoadAnimation';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

const Home = () => {

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      translateX: positionX.value,
      translateY: positionY.value
    }
  })

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

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any){
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any){
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd(){
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
  })

  useEffect(() => {

    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })

  }, [])


  return (
    <Container>

      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCarsTitle>
          {!loading && `Total de ${cars.length} carros`}
          </TotalCarsTitle>
        </HeaderContent>
      </Header>

{
  loading ? <LoadAnimation/> : 
  <CarList
    data={cars}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Car onPress={() => handleCarDetails(item)} data={item} />}
    />

}

  <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
      style={[
        myCarsButtonStyle,
        styles.button,
        {
          position: 'absolute',
          bottom: 13,
          right: 22
        }
      ]}
      >
        <ButtonAnimated onPress={() => {handleOpenMyCars()}}>
            <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape}/>
        </ButtonAnimated>
      </Animated.View>
    </PanGestureHandler>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main
  }
})

export default Home