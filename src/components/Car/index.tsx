import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

 import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from './styles';

 import Gasoline from "../../assets/gasoline.svg"
import { RectButtonProps } from 'react-native-gesture-handler';
import { ICarPropsDTO } from '../../dto/ICarProps';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

 interface Props extends RectButtonProps {
  onPress?: () => void
  data: ICarPropsDTO;
 }

const Car = ({data, onPress, ...rest}: Props) => {

  const MotorIcon = getAccessoryIcon(data.fuel_type) 

  return (
    <Container onPress={onPress} {...rest} >
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
                <MotorIcon/>
            </Type>
          </About>
        </Details>
        <CarImage resizeMode='contain' source={{uri: data.thumbnail}}/>
    </Container>
  )
}

export default Car;