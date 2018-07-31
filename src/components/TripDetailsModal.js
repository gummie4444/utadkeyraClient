import React from 'react';
import TripDetailsHeader from './TripDetailsModal/TripDetailsHeader';
import TripDetailsTime from './TripDetailsModal/TripDetailsTime';
import TripDetailsMain from './TripDetailsModal/TripDetailsMain';
import TripDetailsNote from './TripDetailsModal/TripDetailsNote';

export default ({ outsideClick, trip }) => (
  <div onClick={outsideClick} className="modalOverlay">
    <div onClick={event => event.stopPropagation()} className="modal">
      <span onClick={outsideClick} className="modalClose">&times;</span>

      <TripDetailsHeader fromCity={trip.fromCity.name} toCity={trip.toCity.name} type={trip.type} />
      <TripDetailsTime date={trip.time} />

      <TripDetailsMain
        phone={trip.tripDetails.mobile ? trip.tripDetails.mobile : trip.tripDetails.phone}
        email={trip.tripDetails.email}
        seats={trip.tripDetails.seats}
      />
      <TripDetailsNote notes={trip.tripDetails.notes} name={trip.tripDetails.name} />

    </div>
    <style jsx>{`
            .tripDetailsHeader{
                display:flex;
                justify-content:center;

            }

            .tripDetailsHeaderCity{
                flex:3;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:40px;
            }

            
            `}
    </style>
  </div>

);
