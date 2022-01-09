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


 import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer} from './styles';
import Button from '../../components/Button';

const CarDetails = () => {
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
             <About>
             Lamborghini Huracán EVO ganha 30 cv no motor V10 que vão aos 640 cv, tecnologia do Aventador S, interior high-tech e visual renovado.
             </About>
         </Content>

        <Footer>
            <Button title='Confirmar' color=''/>
        </Footer>   

      </Container>
  )
}

export default CarDetails;