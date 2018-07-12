import React from 'react';
import Location from '../Icons/Location';

export default ({ city, color }) => (
  <div className="tripDetailsHeaderCity">
    <div className="tripDetailsHeaderCityIcon">
      <Location color={color} />
    </div>
    <div>
      {city}
    </div>
    <style jsx>{
        `
        .tripDetailsHeaderCity{
            flex:6;
            position:relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size:32px;
            flex-direction:column;
        }
        .tripDetailsHeaderCityIcon{
            position:absolute;
            top:-30px;
        }
    `
    }
    </style>
  </div>
);
