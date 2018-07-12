import React from 'react';
import TripDetailsHeaderCity from './TripDetailsHeaderCity';
import TripDetailsHeaderIcon from './TripDetailsHeaderIcon';
import {colors} from '../../helpers';

export default ({ fromCity, toCity, type}) => (
  <div className="tripDetailsHeader">
    <TripDetailsHeaderCity city={fromCity} color={colors.orange} />
    <TripDetailsHeaderIcon type={type} />
    <TripDetailsHeaderCity city={toCity} color={colors.blue} />

    <style jsx>{
      `
      .tripDetailsHeader{
        display:flex;
        justify-content:center;
        margin-bottom: 30px;
        margin-top: 20px;
    }
`
    }
    </style>

  </div>
);
