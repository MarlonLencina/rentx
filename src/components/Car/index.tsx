import React from 'react';
import { View } from 'react-native';

 import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from './styles';

 import Gasoline from "../../assets/gasoline.svg"

interface ICarData {
  brand: string;
   name: string;
   rent: {
    period: string;
    price: number;
   },
   thumbnail: string;
}

 interface Props {
   data: ICarData;
 }

const Car = ({data}: Props) => {
  return (
    <Container>
        <Details>
          <Brand>{data.brand}</Brand>
          <Name>{data.name}</Name>
          <About>
            <Rent>
              <Period>
                {data.rent.period}
              </Period>
              <Price>
                {
                  `R$ ${data.rent.price}`
                }
              </Price>
            </Rent>
            <Type>
                <Gasoline/>
            </Type>
          </About>
        </Details>
        <CarImage resizeMode='contain' source={{uri: data.thumbnail}}/>
    </Container>
  )
}

export default Car;