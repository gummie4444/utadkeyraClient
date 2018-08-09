import React from 'react';
import TripDetailsMainItem from './TripDetailsMainItem';

export default ({ phone, seats, email }) => (
  <div className="tripDetailsMain">
    <div className="tripDetailsMainBig">
      <TripDetailsMainItem type="big" header="phone" value={phone} />
      <TripDetailsMainItem type="small" header="seats" value={seats} />
      <TripDetailsMainItem type="big" header="email" value={email} />
    </div>
    <div className="tripDetailsMainSmall">
      <div className="tripDetailsMainSmallWrapper">
        <TripDetailsMainItem type="small" header="phone" value={phone} />
        <TripDetailsMainItem type="small" header="seats" value={seats} />
      </div>
      <TripDetailsMainItem type="big" header="email" value={email} />
    </div>
    <style jsx>{`
  .tripDetailsMain{
    display:flex;
  }
  .tripDetailsMainSmall{
    display:none;
  }
  .tripDetailsMainBig{
    display: flex;
    flex: 1;
  }

  @media only screen and (max-width: 768px) {
    .tripDetailsMainSmall{
      display:flex;
      flex-direction:column;
      flex:1;
      margin-bottom:10px;
      margin-top:10px;
    }
    .tripDetailsMain{
      margin-right:5px;
      margin-left:5px;
    }
    .tripDetailsMainBig{
      margin-bottom:5px;
    }
    .tripDetailsMainSmallWrapper{
      display:flex;
      flex:1;

    }
    .tripDetailsMainBig{
      display:none;
    }
  }
`}
    </style>
  </div>
);
