/* DayPicker styles */

import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, { parseDate } from 'react-day-picker/moment';

import Calendar from '../Icons/Calendar';
import 'react-day-picker/lib/style.css';
import './DateInput.css';
import { formatDate, colors } from '../../helpers';
import CloseIcon from '../Icons/CloseIcon';


export default class DateInput extends React.PureComponent {
  constructor() {
    super();
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      zindex: false
    };
  }
    onFocus = () => {
      this.setState({
        zindex: true
      });
    };
    onBlur = () => {
      this.setState({
        zindex: false
      });
    };
    render() {

      const {date, onDateChange} = this.props;
      return (
        <div className="inputContainer" id="mainDateInput" style={{zIndex: this.state.zindex ? 300 : 2}}>
        <div className="icon">
          <Calendar color={colors.black} height={20} />
        </div>
        <DayPickerInput
          dayPickerProps={{
              locale: 'is',
              localeUtils: MomentLocaleUtils,
              disabledDays: { before: new Date()},
            }}
          placeholder="All dates"
          formatDate={formatDate}
          parseDate={parseDate}
          value={date}
          onDayChange={onDateChange}
          inputProps= {{
            onFocus: this.onFocus,
            onBlur: this.onBlur
          }
          }
        />
        {date && <CloseIcon click={() => onDateChange(null)} /> }
    
    
        <style jsx>{`
              .inputContainer {
                  position: relative;
              }
              .icon {
                  position: absolute;
                  top: 13px;
                  left: 10px;
                  width: 24px;
                  height: 24px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
              .removeIcon{
                position: absolute;
                top: 13px;
                right: 10px;
                width: 24px;
                height: 24px;   
              }

              @media only screen and (max-width: 768px) {
                .inputContainer{
                  width: 100%;
                  display: flex;
                  }
                .inputContainer input{
                  flex:1;
                  margin-left:0 !important;
                }
              }
              `}
        </style>
      </div>
      );

    }
  }