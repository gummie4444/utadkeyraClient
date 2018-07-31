import React from 'react';
import moment from 'moment';
// TODO: change this depending of what language
//moment.locale('is');

export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
          'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
          monospace, serif;
      }
      input[type='text'],
input[type='number'],
textarea {
  font-size: 16px;
}
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #22bad9;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }

      .modalOverlay{
        position: fixed;
        top: 50%;
        left: 50%;
        height: 100vh;
        width: 100vw;
        transform: translate(-50%,-50%);
        background: rgba(0, 0, 0, 0.4);
        z-index:30;
        animation: fadein 0.25s;

    }
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
  
  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
  
  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
        .modal{
            position: fixed;
            top: 50%;
            left: 50%;
            max-height:400px;
            width: 800px;
            max-width:100%;
            transform: translate(-50%,-50%);
            background: rgb(255, 255, 255);
            padding: 20px;
            padding-top:40px;
            padding-bottom:40px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            border-radius:5px;
            display:flex;
            flex-direction:column;
        }


        .modalClose {
            color: #aaa;
            position:absolute;
            right:10px;
            top:10px;
            font-size: 28px;
            font-weight: bold;
        }
        
        .modalClose:hover,
        .modalClose:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        .filterContainer > div:first-of-type input {
          margin-left:0 !important;
      }
      .filterContainer > div:first-of-type #react-autowhatever-From {
        left:0 !important;
      }

        .closeIcon {
          position: absolute;
          top: 13px;
          right: 10px;
          width: 24px;
          height: 24px;
          opacity: 0.3;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor:pointer;
        }
        .closeIcon:hover {
          opacity: 1;
        }
        .closeIcon:before, .closeIcon:after {
          position: absolute;
          left: 15px;
          content: ' ';
          height: 20px;
          width: 2px;
          background-color: #333;
        }
        .closeIcon:before {
          transform: rotate(45deg);
        }
        .closeIcon:after {
          transform: rotate(-45deg);
        }
        @media only screen and (max-width: 600px) {
          body{
            padding:0;
            -webkit-overflow-scrolling : touch !important;
          }
          html{
            overflow: scroll;
             -webkit-overflow-scrolling: touch;
          }
          div {
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
          }
          div > * {
            -webkit-transform: translateZ(0px);
        }

          .createTripModalInput .closeIcon {
            position: absolute;
            top: 5px;
            right: 10px;
            width: 20px;
            height: 20px;

          }

          .createTripModalInput .closeIcon:before, .createTripModalInput .closeIcon:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 15px;
            width: 2px;
            background-color: #333;
          }
          .modal{
            max-width:100%;
            width:100%;
            box-sizing:border-box;
            padding-right: 0;
            padding-left: 0;
            border-radius:0;
            padding-top:0;
          }
          .tripDetailsTimeWrapper{
            width:100vw !important;
          }

          .tripDetailsHeaderCityIcon{
            top:-15px !important;
          }
          .tripDetailsHeaderCity{
            font-size:14px !important;
          }

          .filterContainer{
            flex-direction:column;
          }
        }
    `}
    </style>
  </main>
);
