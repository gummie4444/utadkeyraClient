import React from 'react';
import TripDetailsMainItem from './TripDetailsMainItem';

export default ({ phone, seats, email }) => (
  <div className="tripDetailsMain">
    <TripDetailsMainItem type="big" header="phone" value={phone} />
    <TripDetailsMainItem type="small" header="seats" value={seats} />
    <TripDetailsMainItem type="big" header="email" value={email} />
    <style jsx>{`
  .tripDetailsMain{
    display:flex;
  }
`}
    </style>
  </div>
);
