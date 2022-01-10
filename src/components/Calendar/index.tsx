import React from 'react';

import {Feather} from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { generateInterval } from './generateInterval';

import {Calendar as CustomCalendar,
    LocaleConfig,
    DateCallbackHandler
} from 'react-native-calendars'

import {ptBR} from './locale.config'

LocaleConfig.locales['pt-br'] = ptBR

LocaleConfig.defaultLocale = 'pt-br'

interface markedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
}

interface CalendarProps {
    markedDates: markedDateProps;
    onDayPress: DateCallbackHandler;
}

const Calendar = ({markedDates, onDayPress}: CalendarProps) => {    

    const theme = useTheme()

  return (
      <CustomCalendar 
    
      renderArrow={(direction) => <Feather
        color={theme.colors.text}
        size={24}
        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }
      headerStyle={
          {
              backgroundColor: theme.colors.background_secundary,
              borderBottomWidth: 0.5,
              borderBottomColor: theme.colors.text_detail,
              paddingBottom: 10,
              marginBottom: 10
          }
      }

      theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_400,
          textDayHeaderFontSize: 10,
          textMonthFontFamily: theme.fonts.secundary_600,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: {
              marginHorizontal: -15
          }
      }}

      firstDay={1}
      minDate={new Date().toDateString()}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
      />

  )

}

export {
    DayProps,
    Calendar,
    markedDateProps,
    generateInterval
}