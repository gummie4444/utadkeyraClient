import React from 'react';
import { Portal } from 'react-portal';
import Measure from 'react-measure'

import fetch from 'isomorphic-fetch';
import config from '../setup/config.json';

import TripsList from './TripsList';
import Filter from './Filter';
import TripDetailsModal from './TripDetailsModal';
import CreateTripModal from './CreateTripModal/CreateTripModal';
import CreateNewTripButton from './CreateNewTripButton';

import ReactGA from 'react-ga';
console.log("%cMade by Guðmundur Egill https://github.com/gummie4444", "color: brown;font-weight:bold; font-size:22px;");

//import Headroom from 'react-headroom';
export default class AutoSuggestInput extends React.Component {
  constructor() {
    super();
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      cities:[],

      fromValue: '',
      from: null,
      fromId: null,
      dimensions: {
        width: -1,
        height: -1
      },
      toValue: '',
      to: null,
      toId:null,

      width: -1,

      currentDate: null,
      currentUsableDate: '',
      currentType: 1,

      skip: 0,
      amount: 20,

      modalType:null,
      isOpen: false,
      currentTrip: null
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.cities.length !== nextState.cities.length) {
      return true;
    }
    if (this.state.fromValue !== nextState.fromValue ||
        this.state.from !== nextState.from ||
        this.state.toValue !== nextState.to ||
        this.state.to !== nextState.to ||
        this.state.dimensions.height !== nextState.dimensions.height ||
        this.state.dimensions.width  !== nextState.dimensions.width ||
        this.state.width !== nextState.width ||
        this.state.currentDate !== nextState.currentDate ||
        this.state.currentUsableDate !== nextState.currentUsableDate ||
        this.state.currentType !== nextState.currentType || 
        this.state.modalType !== nextState.modalType ||
        this.state.isOpen !== nextState.isOpen ||
        this.state.currentTrip !== nextState.currentTrip) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    ReactGA.initialize('UA-123666322-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    fetch(process.env.NODE_ENV !== 'production' ? config.apiEndpoint : config.apiEndpointProd, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ cities { name id } }' }),
    })
      .then(res => res.json())
      .then(res => this.setState({ cities: res.data.cities }));
  }

  onDateChange = (day) => {
        this.setState({
            currentDate: day,
            currentUsableDate: day === null ? '' : day,
        });
    };

    onFromClear= () => {
        this.onFromSelected({id: null});
        this.setState({
            fromValue: ''
        });
    }

    onFromChange = (event, { newValue }) => {
        if(newValue.length === 0) {
            this.onFromSelected({id: null});
        }
        this.setState({
            fromValue: newValue
        });
    };

    onFromSelected = (newValue) => {
        this.setState({
            fromId: newValue.id,
            from: newValue.id === null ? null : newValue
        });
    };

    onToClear= () => {
        this.onToSelected({id: null});
        this.setState({
            toValue: ''
        });
    }

    onToChange = (event, { newValue }) => {
        if(newValue.length === 0) {
            this.onToSelected({id: null});
        }
        this.setState({
            toValue: newValue
        });
    };

    onToSelected = (newValue) => {
        this.setState({
            toId: newValue.id,
            to: newValue.id === null ? null : newValue
        });
    };

    openTripDetails = (trip) => {
        document.body.classList.add('modal-open');

        this.setState({
            modalType: 'tripDetailsModal',
            isOpen: true,
            currentTrip: trip
        })
    };

    openCreateTrip = () => {
        document.body.classList.add('modal-open');

        this.setState({
            modalType: 'createTripModal',
            isOpen: true
        })
    };

    outsideClick = (e) => {
        document.body.classList.remove('modal-open');

        if(e) {
            e.preventDefault();
        }

        if(this.state.isOpen) {
            this.setState({
                modalType: null,
                isOpen: false,
                currentTrip: null
            })
        }
    };

  render() {
      
    const currentModal = () => {
        if(this.state.isOpen) {
            switch(this.state.modalType) {
                case 'createTripModal': {
                    return (
                        <Portal><CreateTripModal 
                            fromId={this.state.fromId}
                            toId={this.state.toId}
                            date={this.state.date}
                            skip={this.state.skip}
                            amount={this.state.amount}
                        {...this.state} addNewItem={this.tripListRef.addNewItem} cities={this.state.cities} outsideClick={this.outsideClick}/></Portal>
                    );
                }

                case 'tripDetailsModal': {
                    return (
                        <Portal><TripDetailsModal trip={this.state.currentTrip} outsideClick={this.outsideClick}/></Portal>
                    );
                }
                default:
                    return null
            }
        }
        return null;
    }

    const preLines = () => {
        const count = this.state.dimensions.width < 130 ? 2 : Math.floor((this.state.dimensions.width !== -1 ? this.state.dimensions.width : 100) / 100);
        const array = [...Array(count).keys()];

        return array;
    }

    return (
      <div className="container">
        <span className="headerStyle"> 
            <Measure
            bounds
            onResize={(contentRect) => {
            this.setState({ dimensions: contentRect.bounds })
            }}
            >
                {({ measureRef }) =>
                <div className="headerStyleLine" ref={measureRef} >
                    { 
                    this.state.dimensions.width !== -1 && <div className="headerStyleFade">{preLines().map(t => ' - ')}</div>
                    }
                </div>
                }
            </Measure>
            <span>Út að keyra</span>
            <div className="headerStyleLine">
                { 
                this.state.dimensions.width !== -1 && <div className="headerStyleFade">{preLines().map(t => ' - ')}</div>
                }
            </div>
            <span className="headerStyleMini">         Making carpooling in Iceland great again</span>
        </span>
        <CreateNewTripButton click={this.openCreateTrip} />
        <Filter {...this.state} onFromChange={this.onFromChange} onFromSelected={this.onFromSelected} onFromClear={this.onFromClear} onToChange={this.onToChange} onToSelected={this.onToSelected} onToClear={this.onToClear} onDateChange={this.onDateChange} />
        <div className="tripHeader tripHeaderBig">
              <div className="tripHeaderItem tripHeaderItemType">
              </div>
              <div className="tripHeaderItem tripHeaderItemFrom">
                From
              </div>
              <div className="tripHeaderItem tripHeaderItemTo">
                To
              </div>
              <div className="tripHeaderItem tripHeaderItemSeats">
                Seats
              </div>
              <div className="tripHeaderItem tripHeaderItemDate">
                Date
              </div>
        </div>
        <div className="tripHeader tripHeaderSmall">
              <div className="tripHeaderItem tripHeaderItemType">
              </div>
              <div className="tripHeaderItem tripHeaderItemDetails">
                Details
              </div>
              <div className="tripHeaderItem tripHeaderItemDate">
                Date
              </div>
        </div>
        <TripsList isOpen={this.state.isOpen} ref={instance => { this.tripListRef = instance; }} openPortal={this.openTripDetails} to={this.state.to} from={this.state.from} fromId={this.state.fromId} toId={this.state.toId} date={this.state.currentDate} skip={this.state.skip} amount={this.state.amount} />
        {currentModal()}

        <style jsx>{`

            .container {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;                
            }
            .headerStyle {
                text-shadow: 2px 2px 0 rgba(0,0,0,0.23);
                font-size: 112px;
                margin: 40px;
                font-variant-caps: all-small-caps;
                text-align: center;
                background: #50e3c2;
                color: white;
                width: 100vw;
                padding-top: 10px;
                padding-bottom: 20px;
                position:relative;
                display:flex;
                margin-top:-25px;
            }
            .headerStyleLine{
                flex:1;
                
            }

            .headerStyleFade{
                animation: fadein 1s;
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
            .headerStyleMini{
                text-shadow: 1px 1px 0 rgba(0,0,0,0.23);
                font-size: 24px;
                position:absolute;
                bottom:5px;
                left:50%;
                transform:translate(-50%,0);
                
            }


   
            .tripHeader{
                width:100%;
                height:50px;
                display:flex;
                background: #50E3C2;
                color:white;
                position:sticky;
                top:-1px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
              }
              .tripHeaderBig{
                  display:flex;
              }
              .tripHeaderSmall{
                  display:none;
              }

              .tripHeaderItem{
                display:flex;
                align-items:center;
                margin-left:20px;
                margin-right:20px;
                font-variant-caps: all-small-caps;
                font-size: 22px;
              }
              .tripHeaderItemFrom, .tripHeaderItemTo{
                flex:6;
              }
              .tripHeaderItemType{
                  flex:1;
              }
              .tripHeaderItemSeats{
                  flex:3;
              }
              .tripHeaderItemDate{
                flex:2;
              }

              @media only screen and (max-width: 768px) {
                  .tripHeader{
                      height:40px;
                  }
                .headerStyleMini{
                    display:none;
                }
                .headerStyle{
                    font-size:40px;
                    margin:0;
                    margin-bottom: 20px;
                    margin-top: -5px;
                    padding:0;

                    padding-bottom:10px;
                    padding-top:10px;
                }
                .tripHeaderBig{
                    display:none;
                }
                .tripHeaderSmall{
                    display:flex;
                }
    
                .tripHeaderItemType{
                    flex:5;
                    margin-right: 20px;
                    margin-left: 20px;
                }
                .tripHeaderItemDetails{
                    flex:15;
                    margin:0;
                }
                .tripHeaderItemSeats{
                    flex:2;
                    
                    justify-content:center;
                }
                .tripHeaderItemDate{
                    flex:4;
                    margin-right:20px;
                    margin-left:20px;
                    justify-content:center; 
                }
              } 
              @media only screen and (max-width: 400px) {
                .tripHeaderItemType{
                    margin-right: 5px;
                    margin-left: 5px;
                }
                .tripTime{
                    padding:10px;
                }
                .tripHeaderItemDate{
                    flex:5;
                    margin-right:10px;
                    margin-left:10px;
                    justify-content:center; 
                }
              }
              @media only screen  and (min-device-width : 768px) 
              and (max-device-width : 1024px) {
                .headerStyle{
                    font-size: 92px;
                    margin: 40px;

                    color: white;
                    width: 100vw;
                    padding-top: 10px;
                    padding-bottom: 10px;

                    margin-top:-25px;
                }
                .headerStyleMini{
                    display:flex;
                    font-size:18px;
                }
              }
        `}
        </style>

      </div>
    );
  }
}
