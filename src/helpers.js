import moment from 'moment';

const formatDate = (date, format = 'DD MMMM') => {
  if (moment(date).year() === moment().year()) {
    return moment(date).format('DD MMMM');
  }
  return moment(date).format('DD MMMM YYYY');
};
const formatDateWithTime = (date, format = 'DD MMMM') => {
  const momentDate = moment(date);
  if (momentDate.year() === moment().year()) {
    return momentDate.format('HH:mm') === '23:59' ? `${momentDate.format('DD MMMM')  } ANY TIME` : momentDate.format('DD MMMM hh:mm');
  }
  return momentDate.format('HH:mm') === '23:59' ? `${momentDate.format('DD MMMM YYYY')  } ANY TIME` : momentDate.format('DD MMMM YYYY hh:mm');
};


const colors = {
  orange: '#F5A623',
  blue: '#4A90E2',
  babyGreen: '#50E3C2',
  black: 'black',
};
export { formatDate, formatDateWithTime, colors };
