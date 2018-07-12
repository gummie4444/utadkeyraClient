import React from 'react';

export default ({
  inputText, children, marginRight = '2', error, errorMsg,helpText
}) => (
  <div style={{ marginRight: `${marginRight}px` }} className="createTripModalInput" id="createTripInput">
    <span className="createTripModalInputTitle">
      {inputText}
      {!error && helpText &&
      <div className="createTripModalInputHelpText">
        {'(' + helpText + ')'}
      </div>
      } 
      {error &&
        <div className="createTripModalInputError">
          {errorMsg}
        </div>
      }
    </span>
    {children}
    <style jsx>{`
          .createTripModalInput {
            display:flex;
            flex-direction:column;
            flex:1;
            margin:2px;
        }
        .createTripModalInputTitle{
            margin-left:5px;
            font-size:20px;
            color:#e2fff8;
            display:flex;
            justify-content: space-between;

        }
        .createTripModalInputHelpText{
          font-size:9px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .createTripModalInputError{
          font-size: 9px;
          margin-left: 5px;
          color: white;
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ff6b6b;
          margin-right: 5px;
          position:relative;
        }
        .createTripModalInputError:after{
          content: "";
          position:absolute;
          margin-top:-6px;
          margin-left:-5px;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid #ff6b6b;
          transform:rotate(-180deg);
          right:16px;
          bottom:-4px;
        }
                `}
    </style>
  </div>


);
