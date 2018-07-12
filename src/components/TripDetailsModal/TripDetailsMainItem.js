import React from 'react';

export default ({ type, header, value }) => (
  <div className={type === 'big' ? 'tripDetailsMainItemBig' : 'tripDetailsMainItemSmall'}>
    <div className="tripDetailsMainItemHeader">
      {header}
    </div>
    <div className="tripDetailsMainItemValue">
      {value || 'N/A'}
    </div>
    <style jsx>{
        `
        .tripDetailsMainItemBig{
          flex:5;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          margin-top:20px;
          margin-bottom:20px;

        }
        .tripDetailsMainItemSmall{
          flex:1;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          margin-top:20px;
          margin-bottom:20px;
        }
        .tripDetailsMainItemHeader{
          display:flex;
          font-size:14px;
          color:#50E3C2;
          justify-content:center;
          align-items:center;
          margin-bottom:5px;
          font-variant-caps: all-small-caps;

        }
        .tripDetailsMainItemValue{
          font-size:20px;
          display:flex;
          justify-content:center;
          align-items:center;
        }
      `
    }
    </style>
  </div>
);
