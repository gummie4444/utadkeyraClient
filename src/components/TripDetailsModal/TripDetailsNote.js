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
        overflow-wrap: break-word;
        word-wrap: break-word;
      
        -ms-word-break: break-all;
        /* This is the dangerous one in WebKit, as it breaks things wherever */
        word-break: break-all;
        /* Instead use this non-standard one: */
        word-break: break-word;
      
        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        max-width:80%;
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

      @media only screen and (max-width: 768px) {
        .tripDetailsNoteName{
          margin-top:10px;
        }
        .tripDetailsNote{
          margin-top:0px;
        }

        .tripDetailsNoteText{
          text-align:center ;
          margin-left:10px;
          margin-right:10px;
          margin-top:20px;
        }
        .tripDetailsNoteText:before{
          left:-15px ;
          top:-30px ;

        }
        .tripDetailsNoteText:after{
          right:-5px ;
        }
      }
    `
    }
    </style>
  </div>
);
