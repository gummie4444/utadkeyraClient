import React from 'react';
import moment from 'moment';
import { formatDate } from '../helpers';

const getText = (from, to, date) => {
  if (from && to && date) {
    return (<span>No trips from <b>{from.name}</b> to <b>{to.name}</b> on <b>{formatDate(date)}</b></span>);
  } else if (from) {
    if (from && to) {
      return (<span>No trips from <b>{from.name}</b> to <b>{to.name}</b></span>);
    } else if (from && date) {
      return (<span>No trips from <b>{from.name}</b> on <b>{formatDate(date)}</b></span>);
    }
    return (<span>No trips from <b>{from.name}</b></span>);
  } else if (to) {
    if (to && date) {
      return (<span>No trips to <b>{to.name}</b> on <b>{formatDate(date)}</b></span>);
    }
    return (<span>No trips to <b>{to.name}</b></span>);
  } else if (date) {
    return (<span>No trips on <b>{formatDate(date)}</b></span>);
  }
  return 'There are no trips in the DB :S';
};

export default ({ from, to, date }) => (
  <div style={{marginTop:'20px', paddingRight:'20px', paddingLeft:'20px', textAlign:'center'}}>
    {getText(from, to, date)}
  </div>


);
