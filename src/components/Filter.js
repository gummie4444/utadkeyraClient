import React from 'react';

import AutoSuggestionInput from './AutoSuggestionInput';
import DateInput from './DateInput/DateInput';
import { colors } from '../helpers';

export default class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      types: [{ id: 1, name: 'Ride' }, { id: 2, name: 'Passenger' }],
    };
  }


  render() {
    return (
      <div className="filterContainer"> 
        <AutoSuggestionInput icon="location" onClear={this.props.onFromClear} iconColor={colors.orange} placeholder="From" onChange={this.props.onFromChange} onSelect={this.props.onFromSelected} suggestions={this.props.cities} value={this.props.fromValue} />
        <AutoSuggestionInput icon="location" onClear={this.props.onToClear} iconColor={colors.blue} placeholder="To" onChange={this.props.onToChange} onSelect={this.props.onToSelected} suggestions={this.props.cities} value={this.props.toValue} />
        <DateInput date={this.props.currentUsableDate} onDateChange={this.props.onDateChange} />
        <style jsx>
          {`
                .filterContainer {
                    display: flex;
                    flex-direction:row;
                    margin-bottom:20px;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                }
                .filterContainer > div:first-of-type input {
                    margin-left:0 !important;
                }
            `}
        </style>
      </div>
    );
  }
}
