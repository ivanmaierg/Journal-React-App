import moment from 'moment';

const getDay = () => {
  const today = moment();
  return today.format('dddd DD of MMMM');
};
export default getDay;
