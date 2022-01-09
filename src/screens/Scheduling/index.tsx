import React from 'react';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer} from './styles';
import { useTheme } from 'styled-components';

import {
    useNavigation
} from '@react-navigation/native'

import BackButton from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'
import { StatusBar } from 'react-native';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';

const Scheduling = () => {

    const navigation = useNavigation<any>()

    const theme = useTheme()

    const handleSchedulingDetails = () => {
        navigation.navigate("SchedulingDetails")
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
         <Header>
                <BackButton  color={theme.colors.shape} onPress={() => {}}/>

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
                 <DateValue selected>18/08/2022</DateValue>
             </DateInfo>

                <ArrowSvg/>

             <DateInfo>
                 <DateTitle>
                     ATÉ
                 </DateTitle>
                 <DateValue selected={false} />
             </DateInfo>
         </RentalPeriod>

         </Header>

         <Content>
             <Calendar/>
         </Content>

             <Footer>
                 <Button onPress={handleSchedulingDetails} title='Confirmar'/>
             </Footer>

        </Container>
)

}

export default Scheduling;