import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { api } from '../../service/client';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons'

import { ActivityIndicator, FlatList } from 'react-native';

import { 
    Container, 
    Header, 
    SubTitle, 
    Title, 
    Content, 
    Appointments, 
    AppointmentsTitle, 
    AppointmentsQuantify,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
 } from './styles';
import Car from '../../components/Car';
import Load from '../../components/Load';

interface CarScheduledProps {
    user_id: string;
    car: ICarPropsDTO;
    id: string;
    startDate: string;
    endDate: string;
}

const MyCars: React.FC = () => {

    const theme = useTheme()
    const navigation = useNavigation()

    const [cars, setCars] = useState<CarScheduledProps[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
            
            api.get(`schedules_byuser?user_id=1`).then(res => {
                setCars(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => setLoading(false))

    })

    const handleGoBack = () => {
        navigation.goBack()
    }

  return (
      <Container>
           <Header>
                <BackButton  color={theme.colors.shape} onPress={() => {handleGoBack()}}/>

                <Title>
                    Escolha uma {'\n'}
                    data de inicio {'\n'}
                    e fim do aluguel
                </Title>
                <SubTitle>
                    Conforto, segurança e praticidade.
                </SubTitle>
         </Header>

{         loading ? <Load/> :
        <Content>
        <Appointments>
            <AppointmentsTitle>
                Agendamentos feitos
            </AppointmentsTitle>
            <AppointmentsQuantify>
                {cars.length}
            </AppointmentsQuantify>
        </Appointments>


   <FlatList 
   data={cars}
   keyExtractor={(item) => item.id}
   renderItem={({item}) => {
       return (
       <CarWrapper>
           <Car data={item.car} />
           <CarFooter>
               <CarFooterTitle>
                   Periodo
               </CarFooterTitle>
               <CarFooterPeriod>

                   <CarFooterDate>{item.startDate}</CarFooterDate>

                   <AntDesign name='arrowright' color={theme.colors.title} size={24} style={{
                       marginHorizontal: 10
                   }} />
               
                    <CarFooterDate>{item.endDate}</CarFooterDate>

               </CarFooterPeriod>
           </CarFooter>
       </CarWrapper>)
   }}
   showsVerticalScrollIndicator={false}
   />

    </Content>
}

         
      </Container>
  )
}

export default MyCars;