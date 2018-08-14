import React from 'react';

export default ({ click }) => (
  <a className="createNewTripButton" onClick={click}> +
    <style jsx>{`
      .createNewTripButton{
          position:fixed;
          right:30px;
          bottom:30px;
          height:75px;
          width:75px;
          background:blue;
          border-radius:50%;
          color:white;
          background:#50E3C2;
          box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          display: flex;
          justify-content: center;
          align-items:center;
          font-size:48px;
          cursor:pointer;
          padding-bottom: env(safe-area-inset-bottom);
      }

      .createNewTripButton:hover{
          background:#44ccad;
      }

      .createNewTripButton:active{
        background:#3aaf94;
      }
      @media only screen and (max-width: 768px) {
        .createNewTripButton{
          z-index:10;

        
        right:15px;
          bottom:15px;
          height:60px;
          width:60px;
          font-size:34px;
        }
      }

    `}
    </style>
  </a>
);
