import React from 'react';
import CreateTripInput from './CreateTripInput';
import HitchikeIcon from '../Icons/HitchikeIcon';
import CarDriving from '../Icons/CarDriving';
import CreateTripDateInput from './CreateTripDateInput';
import CreateTripSuggestInput from './CreateTripSuggestionInput';
import CarSeatInput from './CreateTripSeatInput';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Spinner from '../Spinner';

const ADD_TODO = gql`
  mutation tripCreateClient($date: DateTime, $time:DateTime, $to:Int,$fromNew:String, $toNew:String $from:Int, $type: Int, $tripDetails: tripDetailsInputType) {
    tripCreateClient(date: $date, time: $time, to:$to, fromNew:$fromNew, toNew: $toNew, from:$from, type: $type, tripDetails:$tripDetails) {
      id
    }
  }
`;
export default class CreateTripModal extends React.Component {
  constructor() {
    super();

    this.state = {
      error:false,
      errorText: [],

      date: null,

      from: '',
      fromValue:'',
      fromId:null,

      to: '',
      toValue: '',
      toId:null,

      phone: '',
      email: '',
      seats: 0,
      name: '',
      notes: '',
      time: '',


      type: 1,
      hoverClicked:false,
      typeHover:false

    };
  }

 onNameChange = (e) => {
    if(this.state.nameError){
        this.clearError('nameError', 'nameErrorMsg');
     }
      this.setState({
        name: e.target.value
      });
 };
 onPhoneChange = (e) => {
    if(this.state.phoneError){
        this.clearError('phoneError', 'phoneErrorMsg');
     }
      this.setState({
        phone: e.target.value
      });
 };
 onEmailChange = (e) => {
    if(this.state.emailError){
        this.clearError('emailError', 'emailErrorMsg');
     }
      this.setState({
        email: e.target.value
      });
 };
 onNotesChange = (e) => {

      this.setState({
        notes: e.target.value
      });
 };
 onTimeChange = (e) => {
    if(this.state.timeError){
        this.clearError('timeError', 'timeErrorMsg');

     }
      this.setState({
        time: e.target.value
      });
 };

 clearError = (er, msg) => {
      this.setState({
        [er]: false,
        [msg]: ''
      });
 };

  onDateChange = (day) => {
    if(this.state.dateError){
        this.clearError('dateError', 'dateErrorMsg');
     }
    console.log("selected", day);
      this.setState({
        date: day
      });
 };
  // SHITYY DO WITH CSS
  onHoverType = (event, type) => {
      console.log("onOhverType", event, type)
        if(event === 'in' && !this.state.typeHover) {
            this.setState((prevState) => ({
                type: type,
                oldType: prevState.type,
                typeHover: true,
                hoverClicked: false
            }));
        } else if(event === 'out') {
            if(!this.state.hoverClicked) {
                this.setState({
                    type: this.state.oldType,
                    oldType: null,
                    typeHover: false,
                    hoverClicked: false
                }); 
            } else {
                this.setState({
                    oldType: null,
                    typeHover: false,
                    hoverClicked: false
                });
            }
        }
    }
    
    onClickType = (type) => {

        console.log("onOhverType")
        this.setState({
            hoverClicked:true
        })
    }

    onFromClear= () => {
        this.onFromSelected({id: null});
        this.setState({
            fromValue: ''
        });
    }
    onFromChange = (event, { newValue }) => {
        console.log(event,newValue,"test---------FROM")
        if(this.state.fromError){
            this.clearError('fromError', 'fromErrorMsg');

         }
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
        if(this.state.toError){
            this.clearError('toError', 'toErrorMsg');
         }
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

    onSelectCarSeats = (newValue) => {
        if(this.state.seatsError){
            this.clearError('seatsError', 'seatsErrorMsg');
         }
        this.setState({
            seats: newValue
        })
    }

    validateInfo = (cb) =>{
        let errorText = [];
        let error = false;
        let dateError, toError, fromError, phoneError, emailError, nameError, seatsError, timeError = false;
        let dateErrorMsg, toErrorMsg, fromErrorMsg, phoneErrorMsg, emailErrorMsg, nameErrorMsg, seatsErrorMsg, timeErrorMsg = '';
        if(!this.state.date) {
            error = true;
            dateError = true;
            errorText.push('You have to put a valid date');
            dateErrorMsg= 'Date missing';
        }

        if(this.state.toValue.length < 3) {
            error= true;
            toError = true;
            errorText.push('Invalid to destination');
            toErrorMsg= 'Invalid "To" destination';

        }

        if(this.state.toValue.length < 3) {
            error= true;
            fromError = true;
            errorText.push('Invalid from destination');
            fromErrorMsg= 'Invalid "From" destination';

        }
        if(this.state.phone.length < 5 && this.state.email.length < 5) {
            error = true;

            if(this.state.phone.length < 5) {
                phoneError = true;
                phoneErrorMsg = 'Mobile missing'
            } else {
                emailError = true;
                emailErrorMsg = 'Email missing'
            }
            errorText.push('You have to put either a email or a phone number');
        }

        if(this.state.name.length < 3) {
            error= true;
            nameError = true;
            nameErrorMsg= 'Name is needed';
            errorText.push('Add your name');
        }

        if(this.state.seats == 0) {
            error= true;
            seatsError= true;
            seatsErrorMsg= 'Select seat count';

            errorText.push('Add how many seats are needed for your trip');
        }
        if(this.state.seats == 0) {
            error= true;
            seatsError= true;
            seatsErrorMsg= 'Select seat count';

            errorText.push('Add how many seats are needed for your trip');
        }

        if (this.state.time.length > 0){
            if(this.state.time.toLowerCase() !== 'any'){
            const h = this.state.time.substring(0,2);
            const between = this.state.time.substring(2,3);
            const m = this.state.time.substring(3,5);   

            console.log(h,"H");
            console.log(between,"between");
            console.log(m,"m");
            if(this.state.time.length > 5){
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }
            else if(isNaN(h)) {
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            } else if(h < 0 || h > 24){
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }else if(h.length !== 2){
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }
            else if(between !== ':') {
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }
            else if(isNaN(m)) {
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }else if(m.length !== 2){
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            } else if(m < 0 || m > 59){
                error = true;
                timeError = true;
                timeErrorMsg = 'Invalid time format';
            }
        } 
    }
        else{
            error = true;
            timeError = true;
            timeErrorMsg = 'Time missing';
        }

        
        console.log(errorText,'errorText');
        this.setState({
            error,
            dateError,
            toError,
            fromError, 
            phoneError, 
            emailError, 
            nameError, 
            seatsError,
            errorText,
            timeError,
            dateErrorMsg,
            toErrorMsg,
            fromErrorMsg, 
            phoneErrorMsg,
            emailErrorMsg,
            nameErrorMsg,
            seatsErrorMsg,
            timeErrorMsg,
        })

        if(!error){
            this.setState({
                loading:true
            })
            //VALIDATIONS
            const payload = 
            {
            variables: {
                date: this.state.date,
                time: this.state.time, 
                to: this.state.toId, 
                toNew: this.state.toValue,
                from: this.state.fromId,
                fromNew: this.state.fromValue,
                type: this.state.type, 
                tripDetails:{ 
                phone:this.state.phone, 
                email: this.state.email, 
                seats:this.state.seats, 
                name: this.state.name, 
                notes:this.state.notes
                }
            }
            }
            console.log('payload', payload)
            cb(payload).then(() => {setTimeout(() => this.setState({loading:false}),3000); console.log('there is a then after the thingy---')});
        }
      }
  render() {
    const { outsideClick, trip } = this.props;
    return (
      <div onClick={outsideClick} className="modalOverlay">
        <div onClick={event => event.stopPropagation()} className="modal">
          <span onClick={outsideClick} className="modalClose">&times;</span>
          <Mutation mutation={ADD_TODO}>
            {(createTrip, { loading, error }) => (
            <React.Fragment>
                <div className="createTripModalHeader">
                    <span>new trip</span>
                </div>

                <div className="createTripModalMain">
                    <div className="createTripModalMainInputWrapper type">
                        <div className="createTripModalMainInputType" style={{ flex: 1 }}>
                            <div className={this.state.type === 1 ? 'createTripModalMainInputTypeWrap enabled' : 'createTripModalMainInputTypeWrap disabled'} onClick={() => this.onClickType(1)} onMouseLeave={() => this.onHoverType('out',1)} onMouseOver={() => this.onHoverType('in',1)}>
                            <div className="createTripModalMainInputIcon"><HitchikeIcon color={this.state.type === 1 ? 'white': 'gray'} /></div>
                            <span className="createTripModalMainInputText">Passenger</span>
                            </div>
                        </div>
                        <div className="createTripModalMainInputType" style={{ flex: 1 }}>
                            <div className={this.state.type === 2 ? 'createTripModalMainInputTypeWrap enabled' : 'createTripModalMainInputTypeWrap disabled'} onClick={() => this.onClickType(2)} onMouseLeave={() => this.onHoverType('out',2)} onMouseOver={() => this.onHoverType('in',2)}>
                                <div className="createTripModalMainInputIcon"><CarDriving color={this.state.type === 2 ? 'white': 'gray'} height={50} width={70} /></div>
                                <span className="createTripModalMainInputText">Ride</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="createTripModalMainInputWrapper">
                    <CreateTripInput  error={this.state.fromError} errorMsg={this.state.fromErrorMsg}   inputText="From">
                        <CreateTripSuggestInput focus placeholder="" onChange={this.onFromChange} onSelect={this.onFromSelected} onClear={this.onFromClear} suggestions={this.props.cities} value={this.state.fromValue} />
                    </CreateTripInput>
                    <CreateTripInput  error={this.state.toError} errorMsg={this.state.toErrorMsg}  inputText="To">
                        <CreateTripSuggestInput placeholder="" onChange={this.onToChange} onSelect={this.onToSelected} onClear={this.onToClear} suggestions={this.props.cities} value={this.state.toValue} />
                    </CreateTripInput>
                    </div>
                    <div className="createTripModalMainInputWrapper">
                    <div style={{flex:1, flexDirection:'row', display:'flex'}}>
                        <CreateTripInput  error={this.state.dateError} errorMsg={this.state.dateErrorMsg}  marginRight={12} inputText="Date">
                            <CreateTripDateInput date={this.state.date} onDateChange={this.onDateChange}  />
                        </CreateTripInput>
                        <CreateTripInput helpText={'hh:mm or ANY'} error={this.state.timeError} errorMsg={this.state.timeErrorMsg} marginRight={12} inputText="Time">
                            <input value={this.state.time} onChange={this.onTimeChange} style={{ width: '100%',boxSizing:'border-box'}} className="createTripModalInputInput" type="string"/>
                        </CreateTripInput>
                    </div>
                    <CreateTripInput error={this.state.nameError} errorMsg={this.state.nameErrorMsg} inputText="Name">
                        <input className="createTripModalInputInput" onChange={this.onNameChange} value={this.state.name} />
                    </CreateTripInput>
                    </div>
                    <div className="createTripModalMainInputWrapper">
                    <div style={{ flex: 1 }}>
                        <CreateTripInput  error={this.state.phoneError} errorMsg={this.state.phoneErrorMsg}  inputText="Mobile">
                            <input className="createTripModalInputInput" onChange={this.onPhoneChange} value={this.state.phone} />
                        </CreateTripInput>
                        <CreateTripInput  error={this.state.emailError} errorMsg={this.state.emailErrorMsg}  inputText="Email">
                            <input  type="email" className="createTripModalInputInput" onChange={this.onEmailChange} value={this.state.email} />
                        </CreateTripInput>
                        <CreateTripInput  error={this.state.seatsError} errorMsg={this.state.seatsErrorMsg}  inputText={this.state.type === 2 ? 'Seats available' : 'Seats needed'}>
                            <CarSeatInput click={this.onSelectCarSeats} carSeats={this.state.seats} />
                        </CreateTripInput>
                    </div>
                    <CreateTripInput inputText="Notes">
                        <textarea  onChange={this.onNotesChange} value={this.state.notes} className="createTripModalInputInput long" />
                    </CreateTripInput>
                    </div>

                </div>
                <div className="createTripModalFooter">
                    <div className="createTripModalNewButton" onClick={() => this.validateInfo(createTrip)}>
                        {this.state.loading ? <React.Fragment> <Spinner /></React.Fragment> : 'Create'}
                    </div>
                </div>
                {this.state.loading && <div className="createTripModalLoadingOverlay"></div>}
            </React.Fragment>

          )}

          </Mutation>

        </div>

        <style jsx>
          {`
.createTripModalLoadingOverlay{
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background:rgba(0,0,0,0.1);
    animation: fadein 0.25s;
}

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
          .createTripModalLoading{
            position: absolute;
            font-size: 40px;
            top: 50%;
            left: 50%;
            background: white;
            padding: 20px;
            transform: translate(-50%,-50%);
            color: black;
            font-variant: none;
          }
.createTripModalError{
    position: absolute;
    right: -200px;
    width: 200px;
    background: #ff6b6b;
    padding: 20px;
    transform: translate(0,-50%);
    top: 50%;
    text-align: center;
}
.modal{
    background:#50E3C2;
    color:white;
    padding:0;
    padding-top:20px;
    max-height:100vh;
    width:650px;
}
          .createTripModalMain{
              margin-left:20px;
              margin-right:20px;
              margin-bottom:20px;
          }
          .createTripModalMainInputWrapper{
              display:flex;
          }

          .modalClose {
            color:#e2fff8;;
            position:absolute;
            right:10px;
            top:10px;
            font-size: 28px;
            font-weight: bold;
        }
        
        .modalClose:hover,
        .modalClose:focus {
            color: white;
            text-decoration: none;
            cursor: pointer;
        }
        .createTripModalMainInputType{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column
        }

        .createTripModalMainInputTypeWrap{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10px;
            background: #3aaf94;
            height: 75px;
            width: 100px;
            cursor:pointer;
        }
        .createTripModalMainInputTypeWrap.disabled{
            background:white;
            color: #3aaf94;
            opacity: 0.4;
        }
        .createTripModalMainInputTypeWrap.enabled{
            background: #3aaf94;
            color: white;
        }
        .createTripModalMainInputTypeWrap:active{
            background: #339881;
            color: white;
        }

        .createTripModalMainInputIcon{
            display:flex;
            justify-content:center;
            align-items: center;
            height: 70%;
        }
        .createTripModalMainInputText{
            font-variant-caps: all-small-caps;
        }
          .createTripModalInputInput {
            border:none;
            background-image:none;
            background-color:transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            background:#3aaf94;
            color:white;
            margin:5px;
            padding:5px;
            padding-top:10px;
            padding-bottom:10px;
            font-size:16px;
        }
        .createTripModalInputInput.long{
            height:100%;
        }
        .createTripModalInputInput:focus, .createTripModalInputInput:focus{
            outline: none;
        }

            .createTripModalHeader{
                padding-right:20px;
                padding-left:20px;
                margin:10px;
                margin-bottom:20px;
                font-size:60px;
                display:flex;
                justify-content:center;
                align-items:center;
                font-variant:small-caps;

            }
            .createTripModalFooter{
                background:white;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-bottom:0;
                padding:10px;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            .createTripModalNewButton{
                background: #50E3C2;
                color:white;
                border-radius:4px;
                width:300px;
                display:flex;
                justify-content:center;
                align-items:center;
                padding:10px;
                margin:10px;
                font-size:26px;
                cursor:pointer;
            }
            .createTripModalNewButton:hover{
                background:#44ccad;
            }
      
            .createTripModalNewButton:active{
              background:#3aaf94;
            }
          `}
        </style>
      </div>
    );
  }
}
