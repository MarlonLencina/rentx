import { FlatListProps } from 'react-native';
import { FlatList, GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ICarPropsDTO } from '../../dto/ICarProps';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({theme}) => theme.colors.header};
  justify-content: flex-end;

`;

export const TotalCarsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secundary_400};
  color: ${({theme}) => theme.colors.text};
`;

export const HeaderContent = styled.View`

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;

`

export const CarList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})`` as React.ComponentType as new <ICarPropsDTO>() => FlatList<ICarPropsDTO>;


export const MyCarsButton = styled(RectButton)`

width: 60px;
height: 60px;

align-items: center;
justify-content: center;

border-radius: 30px;

background-color: ${({theme}) => theme.colors.main};

position: absolute;
bottom: 0;
right: 0;

margin: 0 22px 13px

`