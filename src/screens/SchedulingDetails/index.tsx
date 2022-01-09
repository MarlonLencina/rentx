import React from 'react';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import Acessory from '../../components/Acessory';


import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import force from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'


import {
    Feather
} from '@expo/vector-icons'

 import { 
    Container, 
    Header, 
    CarImages, 
    Content, 
    Details, 
    Description, 
    Brand, 
    Name, 
    Rent, 
    Period, 
    Price, 
    Acessories, 
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabeL,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';
import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

const SchedulingDetails = () => {
  return (
      <Container>
          <Header>
            <BackButton onPress={() => {}}/>
         </Header>

         <CarImages>
            <Slider imagesUrl={['https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png']}/>
         </CarImages>

         <Content>
             <Details>
                 <Description>
                     <Brand>
                    LAMBORGHINI
                     </Brand>
                     <Name>
                    Huracan
                     </Name>
                 </Description>
                 <Rent>
                     <Period>
                         Ao dia
                     </Period>
                     <Price>
                         R$ 400
                     </Price>
                 </Rent>
             </Details>
             <Acessories>

                <Acessory icon={speed} name='380KM/h' />
                <Acessory icon={acceleration} name='3.2s' />
                <Acessory icon={force} name='000 HP' />
                <Acessory icon={gasoline} name='Gasolina' />
                <Acessory icon={exchange} name='Aotu' />
                <Acessory icon={people} name='2 pessoas' />

             </Acessories>

             <RentalPeriod>

                 <CalendarIcon>
                     <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape}/>
                 </CalendarIcon>

                 <DateInfo>
                     <DateTitle>DE</DateTitle>
                     <DateValue>18/08/2022</DateValue>
                 </DateInfo>

                 <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text}/>

                 <DateInfo>
                     <DateTitle>DE</DateTitle>
                     <DateValue>18/08/2022</DateValue>
                 </DateInfo>

             </RentalPeriod>

             <RentalPrice>
                <RentalPriceLabeL>TOTAL</RentalPriceLabeL>
                <RentalPriceDetails>
                    <RentalPriceQuota>
                        R$ 580 x3 diárias
                    </RentalPriceQuota>
                    <RentalPriceTotal>
                        R$ 2.900
                    </RentalPriceTotal>
                </RentalPriceDetails>
             </RentalPrice>

         </Content>

        <Footer>
            <Button title='Confirmar' color=''/>
        </Footer>   

      </Container>
  )
}

export default SchedulingDetails;