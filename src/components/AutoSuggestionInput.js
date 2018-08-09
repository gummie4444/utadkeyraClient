import Autosuggest from 'react-autosuggest';
import React from 'react';
import PropTypes from 'prop-types';
import Location from './Icons/Location';
import CloseIcon from './Icons/CloseIcon';
/*
    todo

    - send suggestions in props
    - have the value and selected stuff on the props
    - control if it's open or not


*/
const theme = {
    container: {
      position: 'relative'
    },
    input: {
      width: 240,
      height: 30,
      padding: '10px 20px 10px 40px',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 17,
      border: '1px solid #aaa',
      marginLeft:'-1px',

    },
    inputFocused: {
      outline: 'none',
      border: '1px solid #50E3C2',
      boxShadow: '0 0 0 1px #50E3C2',

    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 51,
      left:-1,
      width: 300,
      border: '1px solid #50E3C2',
      backgroundColor: '#fff',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 17,
      zIndex: 3,
      boxShadow: '0 0 0 1px #50E3C2',
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };

// Imagine you have a list of languages that you'd like to autosuggest.


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, suggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : suggestions.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


const renderInputComponent = inputProps => (
    <div className="inputContainer" style={{zIndex: inputProps.test.zindex ? 300 : 2}}>
      <div className="icon" >
        <Location color={inputProps.iconcolor} height="24" />
      </div>
      <input onFocus={inputProps.onFocus} {...inputProps} />

      {inputProps.value && <CloseIcon click={(e) => inputProps.test.onClear()}/> }
        <style jsx>{`
            .inputContainer {
                position: relative;
            }
            .icon {
                position: absolute;
                top: 13px;
                left: 10px;
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .icon svg{
              height:24px;
            }

            @media only screen and (max-width: 768px) {
              .inputContainer{
                width: 100%;
                display: flex;
                margin-bottom:10px;
              }
              .inputContainer input{
                flex:1;
                margin-left:0 !important;
              }
              .inputContainer input:focus{
                box-shadow:none !important;
              }
            }
            `}
        </style>
    </div>
  );

export default class AutoSuggestInput extends React.PureComponent {
  constructor() {
    super();
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      zindex: false
    };
  }


  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.suggestions)
    });
  };
  onFocus = () => {
    this.setState({
      zindex: true
    });
  };
  onBlur = () => {
    this.setState({
      zindex: false
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSuggestionSelected = (e, {suggestion}) => {
    this.props.onSelect(suggestion);
  };

  render() {
    const { suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.placeholder,
      value: this.props.value,
      onChange: this.props.onChange,
      test: { onClear: this.props.onClear, zindex:this.state.zindex},
      icon: this.props.icon,
      iconcolor: this.props.iconcolor,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    };

    // Finally, render it!
    return (
      <Autosuggest
        ref="test"
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
        renderInputComponent={renderInputComponent}
        id={this.props.placeholder}
      />
    );
  }
}

AutoSuggestInput.propTypes = {
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func,
    onSelect: PropTypes.func,
    onClear:PropTypes.func,
    suggestions: PropTypes.array,
    value: PropTypes.string
};