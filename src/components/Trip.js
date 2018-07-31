import React from 'react';
import moment from 'moment';
import CarSeatIcon from './Icons/CarSeatIcon';
import CarDriving from './Icons/CarDriving';
import HitchikeIcon from './Icons/HitchikeIcon';
import Location from './Icons/Location';
import { colors } from '../helpers';


const getSeats = (trip, height = 35, width = 40) => {
  if (trip.tripDetails.seats) {
    if (trip.tripDetails.seats > 4) {
      return (<React.Fragment>
        <CarSeatIcon height={height} width={width} key={1} />
        <CarSeatIcon height={height} width={width} key={2} />
        <CarSeatIcon height={height} width={width} key={3} />
        <CarSeatIcon height={height} width={width} key={4} />
        { '+' }
              </React.Fragment>
      );
    }
    return (
      [...Array(trip.tripDetails.seats)].map((i, index) => <CarSeatIcon height={height} width={width} key={index} />)
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
    <div className="tripDetailsBig">
      <div className="tripFrom tripItem" title={`From: ${trip.fromCity.name}`} >

        <span>{trip.fromCity.name}</span>
      </div>
      <div className="tripTo tripItem" title={`To: ${trip.toCity.name}`} >

        <span>{trip.toCity.name}</span>
      </div>
      <div className="tripSeats tripItem" title={`${trip.tripDetails.seats} seats available`} >
        {
            getSeats(trip)
          }
      </div>
    </div>
    <div className="tripDetailsSmall">
      <div className="tripFrom tripItem" title={`From: ${trip.fromCity.name}`} >
          <Location color={colors.orange} height="12" />
          <span>{trip.fromCity.name}</span>
        </div>
      <div className="tripTo tripItem" title={`To: ${trip.toCity.name}`} >
          <Location color={colors.blue} height="12" />
          <span>{trip.toCity.name}</span>
        </div>
      <div className="tripSeats tripItem" title={`${trip.tripDetails.seats} seats available`} >
        {
            getSeats(trip, 20, 20)
          }
      </div>
    </div>


    <div className="tripTime tripItem" >
      <div className="tripTimeWrapper">
        <span className="tripTimeDay"> {moment(trip.time).format('ddd')} </span>
        <span className="tripTimeDayMain"> {moment(trip.time).format('D')} </span>
        <span className="tripTimeMonth"> {moment(trip.time).format('HH:mm') === '23:59' ? `Any time${moment(trip.time).format(' MMMM')}` : moment(trip.time).format('HH:mm MMMM')} </span>
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
      .tripDetailsBig{
        display:flex;
        flex:15;
      }
      .tripDetailsSmall{
        display:none;
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

      @media only screen and (max-width: 600px) {
        .tripType{
            flex:2;
        }
        .tripDetailsBig{
          display:none;
        }
        .tripDetailsSmall{
          flex:15;
          display:flex;
          flex-direction:column;

        }

        .tripDetailsSmallFromTo{
          display:flex;
          flex:1;
        }
        .tripType{
          padding:20px;
          flex:5;
        }
        .tripTo, .tripFrom{
          flex:1;
          padding:0;
          font-size:14px;
        }
        .tripFrom, .tripTo, .tripSeats{
          padding-top:2px;
          padding-bottom:2px;
        }

        .tripType div svg{
          width:40px !important;
          height:20px !important;
        }
        .tripSeats{
          flex:1;
          font-size:18px;
          padding:0;
          display:flex;
        }
        .tripTime{
          justify-content:center;
          flex:4;
        }
        .tripTimeDayMain{
          font-size:38px;
        }
        .tripContainer{
          font-size:12px;
        }
      } 
      @media only screen and (max-width: 400px) {
        .tripType{
          padding:5px;
        }
        .tripTime{
          padding:10px;
      }
      }

    `}
    </style>
  </div>
);
