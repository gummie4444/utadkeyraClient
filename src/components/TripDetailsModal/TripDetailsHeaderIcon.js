
import React from 'react';
import CarDriving from '../Icons/CarDriving';
import HitchikeIcon from '../Icons/HitchikeIcon';


export default ({ type }) => (
  <div className="tripDetailsHeaderIcon">

   {type === 2 ? <CarDriving /> : <HitchikeIcon />}
    <style jsx>{
            `.tripDetailsHeaderIcon{
                flex:1;
                max-width:80px;
                display:flex;
                justify-content:center;
                align-items:center;
            }`
    }
    </style>
  </div>
);
