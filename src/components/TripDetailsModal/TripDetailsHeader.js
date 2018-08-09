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

    @media only screen and (max-width: 600px) {
      .tripDetailsHeader{
        width:100vw ;
        margin-bottom: 10px ;
        margin-top: 40px ;
        height: 50px ;
      }
    }
    @media only screen and (max-width: 764px) {
      .tripDetailsHeader{
        width:100vw ;
        margin-bottom: 10px ;
        margin-top: 40px ;
        height: 50px ;
      }
    }
    @media only screen  and (min-device-width : 768px) 
    and (max-device-width : 1024px) {
      .tripDetailsHeader{
        margin-top: 30px;
        min-height: 50px;
        margin-bottom: 10px;
      }
    }
`
    }
    </style>

  </div>
);
