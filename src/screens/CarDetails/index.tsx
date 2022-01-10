import React from 'react';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import Acessory from '../../components/Acessory';
import {useNavigation, useRoute} from "@react-navigation/native"


import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import force from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'

 import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer} from './styles';
import Button from '../../components/Button';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
    car: ICarPropsDTO
}

const CarDetails = () => {

    const route = useRoute()
    const {car} = route.params as Params;
    const navigation = useNavigation<any>()

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
          <Header>
            <BackButton onPress={() => {handleGoBack()}}/>
         </Header>

         <CarImages>
            <Slider imagesUrl={[car.photos[0]]}/>
         </CarImages>

         <Content>
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
{car.about}             </About>
         </Content>

        <Footer>
            <Button onPress={handleCarScheduling} title='Escolher periodo do Aluguel' color=''/>
        </Footer>   

      </Container>
  )
}

export default CarDetails;