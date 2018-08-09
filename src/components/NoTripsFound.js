import React from 'react';
import moment from 'moment';
import { formatDate } from '../helpers';

const getText = (from, to, date) => {
  if (from && to && date) {
    return (<span>There are no rides from <b>{from.name}</b> to <b>{to.name}</b> on <b>{formatDate(date)}</b></span>);
  } else if (from) {
    if (from && to) {
      return (<span>There are no rides from <b>{from.name}</b> to <b>{to.name}</b></span>);
    } else if (from && date) {
      return (<span>There are no rides from <b>{from.name}</b> on <b>{formatDate(date)}</b></span>);
    }
    return (<span>There are no rides from <b>{from.name}</b></span>);
  } else if (to) {
    if (to && date) {
      return (<span>There are no rides to <b>{to.name}</b> on <b>{formatDate(date)}</b></span>);
    }
    return (<span>There are no rides to <b>{to.name}</b></span>);
  } else if (date) {
    return (<span>There are no rides on <b>{formatDate(date)}</b></span>);
  }
  return 'There are no rides in the DB :S';
};

export default ({ from, to, date }) => (
  <div style={{marginTop:'20px'}}>
    {getText(from, to, date)}
  </div>


);
