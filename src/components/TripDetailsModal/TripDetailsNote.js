import React from 'react';

export default ({ notes, name }) => (
  <div className="tripDetailsNote">
    {notes &&
      <div className="tripDetailsNoteText">
        {notes || 'No notes'}
      </div>
    }
    <div className="tripDetailsNoteName">
      {name || 'N/A'}
    </div>

    <style jsx>{
      `
      .tripDetailsNote{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:20px;
        margin-left: 10px;
        margin-right: 10px;
        font-style:italic;
      }
    
      .tripDetailsNoteText{
        font-size:12px;
        margin-bottom:20px;
        position:relative;
        font-family: Arial, Helvetica, sans-serif;
      }

      .tripDetailsNoteText:before{
        content:'“';
        font-size:60px;
        position:absolute;
        left:-25px;
        color:#50E3C2;
        top:-25px;
        font-family: Arial, Helvetica, sans-serif;

      }
      .tripDetailsNoteText:after{
        content:'”';
        font-size:60px;
        position:absolute;
        right:-15px;
        color:#50E3C2;
        bottom:-60px;
        font-family: Arial, Helvetica, sans-serif;

      }
      .tripDetailsNoteName{
        font-size:17px;
        font-weight:700;
      }
    `
    }
    </style>
  </div>
);
