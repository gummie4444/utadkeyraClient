import React from 'react';

const renderValue = (value, header) => {
  if (!value) {
    return 'N/A';
  } else if (header === 'phone') {
    return (
      <a href={`tel:${value}`}>{value}</a>
    );
  } else if (header === 'email') {
    return (
      <a href={`mailto:${value}`}>{value}</a>
    );
  }
  return (
    value || 'N/A'
  );
};
export default ({
  type, header, value
}) => (
  <div className={type === 'big' ? 'tripDetailsMainItemBig' : 'tripDetailsMainItemSmall'}>
    <div className="tripDetailsMainItemHeader">
      {header}
    </div>
    <div className="tripDetailsMainItemValue">
      {renderValue(value, header)}
    </div>
    <style jsx>{
        `
        a{
          color:black;
        }
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
        @media only screen and (max-width: 768px) {

        .tripDetailsMainItemSmall, .tripDetailsMainItemBig{
          margin-top:5px;
          margin-bottom:5px;
          flex:1;
        }
        .tripDetailsMainItemBig{
          margin-top:0;
          margin-bottom:0;
        }
        .tripDetailsMainItemValue{
          font-size:16px;
        }
      }
      `
    }
    </style>
  </div>
);
