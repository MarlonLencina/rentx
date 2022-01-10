import React from 'react';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import Acessory from '../../components/Acessory';
import {useNavigation, useRoute} from "@react-navigation/native"

import { useTheme } from 'styled-components';

import Animated, { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import force from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'

 import { Container, Header, CarImages, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer} from './styles';
import Button from '../../components/Button';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

interface Params {
    car: ICarPropsDTO
}

const CarDetails = () => {

    const scrolly = useSharedValue(0)

    const scrollHandle = useAnimatedScrollHandler(event => {
        scrolly.value = event.contentOffset.y
    })

    const headerStyleAnimation = useAnimatedStyle(() => {

        return {
            height: interpolate(
                scrolly.value,
                [0, 200],
                [200, 90],
                Extrapolate.CLAMP
            )
        }
    })

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrolly.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    const route = useRoute()
    const {car} = route.params as Params;
    const navigation = useNavigation<any>()

    const theme = useTheme()

    const handleCarScheduling = () => {
        navigation.navigate("Scheduling", {
            car
        })
    }

    const handleGoBack = () => {
        navigation.goBack()
    }

  return (
      <Container>
          <StatusBar
          style='dark'
          translucent
          backgroundColor='transparent'
          />
          <Animated.View
          style={[headerStyleAnimation, styles.header, {
              backgroundColor: theme.colors.background_secundary
          }]}
          >
          <Header>
            <BackButton onPress={() => {handleGoBack()}}/>
         </Header>

         <Animated.View style={sliderCarsStyleAnimation}>
             <CarImages>
                <Slider imagesUrl={car.photos}/>
            </CarImages>
         </Animated.View>
          </Animated.View>

         <Animated.ScrollView
         scrollEventThrottle={16}
         onScroll={scrollHandle}
         showsVerticalScrollIndicator={false}
         style={
             {
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight() + 160
             }
         }
         
         >
             <Details>
                 <Description>
                     <Brand>
                    {car.brand}
                     </Brand>
                     <Name>
                    {car.name}
                     </Name>
                 </Description>
                 <Rent>
                     <Period>
                         {car.rent.period}
                     </Period>
                     <Price>
                         {`R$ ${car.rent.price}`}
                     </Price>
                 </Rent>
             </Details>
             <Acessories>
{
                car.accessories.map((item) => {
                    return <Acessory key={item.type} icon={getAccessoryIcon(item.type)} name={item.name} />
                })
}

{               /* <Acessory icon={acceleration} name='3.2s' />
                <Acessory icon={force} name='000 HP' />
                <Acessory icon={gasoline} name='Gasolina' />
                <Acessory icon={exchange} name='Aotu' />
                <Acessory icon={people} name='2 pessoas' /> */}

             </Acessories>

             <About>
{car.about}
            </About>
         </Animated.ScrollView>

        <Footer>
            <Button onPress={handleCarScheduling} title='Escolher periodo do Aluguel' color=''/>
        </Footer>   

      </Container>
  )
}

export default CarDetails;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    },
})