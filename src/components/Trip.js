import React from 'react';
import moment from 'moment';
import CarSeatIcon from './Icons/CarSeatIcon';
import CarDriving from './Icons/CarDriving';
import HitchikeIcon from './Icons/HitchikeIcon';
import MediaQuery from 'react-responsive';

const getSeats = (trip) => {
  if (trip.tripDetails.seats) {
    if (trip.tripDetails.seats > 4) {
      return (<React.Fragment>
        <CarSeatIcon key={1} />
        <CarSeatIcon key={2} />
        <CarSeatIcon key={3} />
        <CarSeatIcon key={4} />
        { '+' }
      </React.Fragment>
      );
    }
    return (
      [...Array(trip.tripDetails.seats)].map((i, index) => <CarSeatIcon key={index} />)
    );
  }

  return 'N/A';
};
export default ({ trip, index, openPortal }) => (
  <div
    key={trip.id}
    onClick={() => openPortal(trip)}
    className="tripContainer"
  >
    <div className="tripType tripItem" title={trip.type === 2 ? 'Offering ride' : 'Requesting ride'} >
      <span>{trip.type === 2 ? <CarDriving /> : <HitchikeIcon />}</span>
    </div>
    <div className="tripFrom tripItem" title={`From: ${trip.fromCity.name}`} >
      <span>{trip.fromCity.name}</span>
    </div>
    <div className="tripTo tripItem" title={`To: ${trip.toCity.name}`} >
      <span>{trip.toCity.name}</span>
    </div>
    <div className="tripSeats tripItem" title={`${trip.tripDetails.seats} seats available`} >

      <MediaQuery minWidth={1224} minDeviceWidth={1224}>
        {
          getSeats(trip)
        }
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        {trip.tripDetails.seats || 'N/A'}
      </MediaQuery>
    </div>

    <div className="tripTime tripItem" >
      <div className="tripTimeWrapper">
        <span className="tripTimeDay"> {moment(trip.time).format('ddd')} </span>
        <span className="tripTimeDayMain"> {moment(trip.time).format('D')} </span>
        <span className="tripTimeMonth"> {moment(trip.time).format('HH:mm') === '23:59' ? `Any time${  moment(trip.time).format(' MMMM')}` : moment(trip.time).format('HH:mm MMMM')} </span>
      </div>
    </div>

    <style jsx>{`
      .tripContainer{
          display:flex;
          justify-content:center;
          align-items:center;
          height:90px;
          color:black;
          border-bottom:1px #dfe6e9 solid;
          cursor:pointer;
      }
      .tripContainer:hover {
          background:#dfe6e9;
      }

      .tripItem{
          display:flex;
          align-items:center;
          padding: 20px;
      }
      .tripFrom {
          flex:6;
      }
      .tripTo {
          flex:6;
      }
      .tripSeats {
          flex:3;
          font-size:32px;
          font-weight:700;
      }
      .tripTime{
          flex:2;
      }

      .tripType{
          flex:1;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .tripTimeWrapper {
        display:flex;
        flex-direction:column;
        align-items:center;
      }
      .tripTimeDay{
          font-size:18px;
          font-variant-caps: all-small-caps;
          margin-bottom:-5px;
      }
      .tripTimeDayMain{
        font-size:46px;
      }
      .tripTimeMonth{
          font-size:12px;
          margin-top:-8px;
          font-variant-caps: all-small-caps;
      }

      @media only screen and (max-width: 1200px) {
        .tripType{
            flex:2;
        }
        .tripSeats{
          flex:2;
          justify-content:center;
        }
        .tripTime{
          justify-content:center;
        }
      } 
    `}
    </style>
  </div>
);
