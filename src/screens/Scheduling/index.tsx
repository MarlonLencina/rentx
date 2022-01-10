import React, { useState } from 'react';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer} from './styles';
import { useTheme } from 'styled-components';

import {
    useNavigation
} from '@react-navigation/native'

import BackButton from '../../components/BackButton';

import { useRoute } from '@react-navigation/native';
import ArrowSvg from '../../assets/arrow.svg'
import { Alert, StatusBar } from 'react-native';
import Button from '../../components/Button';
import {Calendar, DayProps, generateInterval, markedDateProps} from '../../components/Calendar';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { ICarPropsDTO } from '../../dto/ICarProps';

interface RentalPeriod {
    start: number;
    startFormatted: string;
    end: number;
    endFormatted: string;
}

interface Params {
    car: ICarPropsDTO
}

const Scheduling = () => {

    const route = useRoute()
    const {car} = route.params as Params;

    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<markedDateProps>({} as markedDateProps)
    const [rentalPeriod, SetRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const navigation = useNavigation<any>()

    const theme = useTheme()

    const handleSchedulingDetails = () => {
        if(!rentalPeriod.start || !rentalPeriod.end){
            return Alert.alert("Voce precisa selecionar uma data de inicio e fim do aluguel")
        }

        navigation.navigate("SchedulingDetails", {
            car,
            markedDates: Object.keys(markedDates)
        })

    }

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleChangeDate = (date: DayProps) => {

        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);

        const interval = generateInterval(start, end)
        setMarkedDates(interval)

        const firstDay = Object.keys(interval)[0]
        const lastDay = Object.keys(interval)[Object.keys(interval).length - 1]

        SetRentalPeriod({
            start: start.timestamp,
            end: end.timestamp,
            startFormatted: format(getPlatformDate(new Date(firstDay)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(lastDay)), 'dd/MM/yyyy'),
        })
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
         <Header>
                <BackButton  color={theme.colors.shape} onPress={() => {handleGoBack()}}/>

                <Title>
                    Escolha uma {'\n'}
                    data de inicio {'\n'}
                    e fim do aluguel
                </Title>

                <RentalPeriod>
             <DateInfo>
                 <DateTitle>
                     DE
                 </DateTitle>
                 <DateValue selected={!!rentalPeriod.startFormatted} >{rentalPeriod.startFormatted}</DateValue>
             </DateInfo>

                <ArrowSvg/>

             <DateInfo>
                 <DateTitle>
                     ATÉ
                 </DateTitle>
                 <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
             </DateInfo>
         </RentalPeriod>

         </Header>

         <Content>
             <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
         </Content>

             <Footer>
                 <Button onPress={() => {handleSchedulingDetails()}} title='Confirmar'/>
             </Footer>

        </Container>
)

}

export default Scheduling;