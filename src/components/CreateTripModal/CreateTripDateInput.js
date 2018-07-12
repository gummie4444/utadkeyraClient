import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, { parseDate } from 'react-day-picker/moment';
import { formatDate } from '../../helpers';
import './CreateTripDateInput.css';
import React from 'react';

export default ({ date, onDateChange }) => (
  <DayPickerInput
    dayPickerProps={{
        locale: 'is',
        localeUtils: MomentLocaleUtils,
      }}
    placeholder=""
    formatDate={formatDate}
    parseDate={parseDate}
    value={date}
    onDayChange={onDateChange}
    inputProps={{
      onFocus: () => console.log('focus'),
      onBlur: () => console.log('blur'),
    }
    }
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
