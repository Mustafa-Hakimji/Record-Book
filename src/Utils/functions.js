const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const days = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

export const getMonth = month => {
  const mon = months[month];
  return mon;
};

export const getDay = day => {
  const res = days[day];
  return res;
};

export const checkAmount = amount => {
  for (let i = 0; i < amount.length; i++) {
    if (isNaN(Number(amount[i]))) {
      return false;
    }
  }
  return true;
};
