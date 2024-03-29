import React from 'react';
import CarSeatIcon from '../Icons/CarSeatIcon';

/*
  number: [null, 1,2,3,4,5,5+]

*/

export default class CarSeatInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      selected: 0,
      hovering: false
    };
  }

  onHover = (number) => {
    this.setState({
        hovering: true,
        selected:number
    })
}
  stopHover = (number) => {
    this.setState({
        hovering: false,
        selected:this.props.carSeats
    })
}
  clickItem = (number) => {
    this.setState({
        hovering: false,
        selected: number
    })
    this.props.click(number);
}

  render() {

    return (
      <div className="carSeatInputWrapper">
        <div className="carSeatInputWrapperIcon">
          <div onClick={() =>this.clickItem(1)} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(1)} className="carSeatInputIcon">
            <CarSeatIcon color={this.state.selected > 0 ? 'white' : 'gray'} />
          </div>
          <div onClick={() =>this.clickItem(2)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(2)}  className="carSeatInputIcon">
            <CarSeatIcon color={this.state.selected > 1 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(3)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(3)}  className="carSeatInputIcon">
            <CarSeatIcon color={this.state.selected > 2 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(4)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(4)}  className="carSeatInputIcon">
            <CarSeatIcon color={this.state.selected > 3 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(5)} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(5)}  className="carSeatInputIcon">
            <CarSeatIcon color={this.state.selected > 4 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(6)}  className="carSeatInputIcon" style={{color: this.state.selected > 5 ? 'white' : '#a4cec7' }} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(6)}>
            +
          </div>
        </div>
        <div className="carSeatInputWrapperIconSmall">
          <div onClick={() =>this.clickItem(1)} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(1)} className="carSeatInputIcon">
            <CarSeatIcon height="20" width="20" color={this.state.selected > 0 ? 'white' : 'gray'} />
          </div>
          <div onClick={() =>this.clickItem(2)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(2)}  className="carSeatInputIcon">
            <CarSeatIcon height="20" width="20" color={this.state.selected > 1 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(3)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(3)}  className="carSeatInputIcon">
            <CarSeatIcon height="20" width="20" color={this.state.selected > 2 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(4)}  onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(4)}  className="carSeatInputIcon">
            <CarSeatIcon height="20" width="20" color={this.state.selected > 3 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(5)} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(5)}  className="carSeatInputIcon">
            <CarSeatIcon height="20" width="20" color={this.state.selected > 4 ? 'white' : 'gray'}  />
          </div>
          <div onClick={() =>this.clickItem(6)}  className="carSeatInputIcon" style={{color: this.state.selected > 5 ? 'white' : '#a4cec7' }} onMouseLeave={this.stopHover} onMouseEnter={() => this.onHover(6)}>
            +
          </div>
        </div>
        <div className="carSeatInputIconSpecial">
          {this.state.selected === 0 ? '' :this.state.selected > 5 ? '5+' : this.state.selected}
        </div>
        <style jsx>{`

        .carSeatInputWrapperIcon{
          display:flex;
          flex:1;
        }
        .carSeatInputWrapperIconSmall{
          display:none;
        }
          .carSeatInputWrapper{
            margin:5px;
            padding:5px;
            background:#3aaf94;
            display:flex;
            font-size:30px;
            align-items:center;
            color:#a4cec7;

          }
          .carSeatInputIcon{
            cursor:pointer;
          }
          .carSeatInputIconSpecial{
            color:white;
          }
          @media only screen and (max-width: 768px) {
            .carSeatInputWrapper{
              margin:2px;
              padding-top:2px;
              padding-bottom:2px;
              font-size:16px;
              position:relative;

            }
            .carSeatInputIconSpecial{
              position:absolute;
              right:4px;
            }
            .carSeatInputWrapperIconSmall{
              display:flex;
            }
            .carSeatInputWrapperIcon{
              display:none;
            }
          }
                `}
        </style>
      </div>
    );
  }
}
