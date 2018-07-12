import React from 'react';
import { formatDateWithTime } from '../../helpers';

export default ({ date }) => (
  <div className="tripDetailsTimeWrapper">
    <div className="tripDetailsTime">
      {formatDateWithTime(date)}
    </div>

    <style jsx>{`
  .tripDetailsTimeWrapper{
    height:50px;
    background:#50E3C2;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
  }
`}
    </style>
  </div>
);
