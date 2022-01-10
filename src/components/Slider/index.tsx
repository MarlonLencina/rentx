import React, {useRef, useState} from 'react';
import { FlatList, View, ViewToken } from 'react-native';

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface Props {
    imagesUrl: string[]
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const Slider = ({
    imagesUrl
}: Props) => {

  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index)
  })

  return (
      <Container>
        <ImageIndexes>
          {
            imagesUrl.map((_, index) => {
              return <ImageIndex key={index} active={imageIndex === index} ></ImageIndex>
            })
          }
        </ImageIndexes>


        <FlatList
        onViewableItemsChanged={indexChanged.current}
        data={imagesUrl}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(key) => key}
        renderItem={({item}) => {
          return (
            <CarImageWrapper>
          <CarImage 
          source={{ uri: item }}
          resizeMode='contain'
          />
          </CarImageWrapper>
          )
        }}
        />
      </Container>
  )
}

export default Slider;