import React, { useEffect, useMemo, useState } from 'react';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import Acessory from '../../components/Acessory';
import { useRoute } from '@react-navigation/native';
import { markedDateProps } from '../../components/Calendar';


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

import {useNavigation} from "@react-navigation/native"
import { useTheme } from 'styled-components';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../service/client';

interface Params {
    car: ICarPropsDTO,
    markedDates: string[]
}

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}


const SchedulingDetails = () => {

    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const route = useRoute()
    const {car, markedDates} = route.params as Params

    const theme = useTheme()

    const navigation = useNavigation<any>()
    
    const handleCompleteScheduling = async () => {

try {

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    console.log(schedulesByCar)

    const unavailable_dates = [
        ...schedulesByCar.data.unavailable_dates,
        ...markedDates
    ]

    await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
    })

    navigation.navigate("SchedulingComplete")

    
} catch (error) {
    console.log(error)
}
      
    }

    const handleGoBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(markedDates[0])), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(markedDates[markedDates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])

    const totalDays = +markedDates.length
    const RentTotalPrice = useMemo(() => {
        return totalDays * Number(car.rent.price)
    }, [])
  
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
                car.accessories.map(item => {
                    return <Acessory key={item.type} icon={getAccessoryIcon(item.type)} name={item.name} />
                })
            }

             </Acessories>

             <RentalPeriod>

                 <CalendarIcon>
                     <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape}/>
                 </CalendarIcon>

                 <DateInfo>
                     <DateTitle>DE</DateTitle>
                     <DateValue>{rentalPeriod.startFormatted}</DateValue>
                 </DateInfo>

                 <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text}/>

                 <DateInfo>
                     <DateTitle>DE</DateTitle>
                     <DateValue>{rentalPeriod.endFormatted}</DateValue>
                 </DateInfo>

             </RentalPeriod>

             <RentalPrice>
                <RentalPriceLabeL>TOTAL</RentalPriceLabeL>
                <RentalPriceDetails>
                    <RentalPriceQuota>
                        {`R$ ${car.rent.price} x${totalDays} diárias`}
                    </RentalPriceQuota>
                    <RentalPriceTotal>
                        {`R$ ${RentTotalPrice}`}
                    </RentalPriceTotal>
                </RentalPriceDetails>
             </RentalPrice>

         </Content>

        <Footer>
            <Button onPress={handleCompleteScheduling} title='Alugar Agora' color={theme.colors.success}/>
        </Footer>   

      </Container>
  )
}

export default SchedulingDetails;