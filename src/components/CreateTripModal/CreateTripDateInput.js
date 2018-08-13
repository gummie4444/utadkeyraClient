import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, { parseDate } from 'react-day-picker/moment';
import { formatDate } from '../../helpers';
import './CreateTripDateInput.css';
import React from 'react';

export default ({ date, onDateChange }) => (
  
  <DayPickerInput
    dayPickerProps={{
        locale: 'en',
        localeUtils: MomentLocaleUtils,
        disabledDays: { before: new Date() },
      }}
    placeholder=""
    formatDate={formatDate}
    parseDate={parseDate}
    value={date}
    onDayChange={onDateChange}
    
  >
    <style jsx>{`
          .createTripModalInput {
            display:flex;
            flex-direction:column;
            flex:1;
            margin:2px;
        }
        .createTripModalInputTitle{
            margin-left:5px;
            font-size:20px;
            color:#e2fff8;

        }
                `}
      </style>
  </DayPickerInput>


);
