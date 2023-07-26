const MonthNamesMap = {
  '01': 'января',
  '02': 'февраля',
  '03': 'марта',
  '04': 'апреля',
  '05': 'мая',
  '06': 'июня',
  '07': 'июля',
  '08': 'августа',
  '09': 'сентября',
  '10': 'октября',
  '11': 'ноября',
  '12': 'декабря'
};

export const getDate = (date: string) => {
  const day = `${date[8]}${date[9]}`;
  const month = MonthNamesMap[`${date[5]}${date[6]}` as keyof typeof MonthNamesMap];
  const year = `${date[0]}${date[1]}${date[2]}${date[3]}`
  const time = date.match(/(?<=T)\d{2}:\d{2}/);

  const resultDate = `${day} ${month} ${year} ${time ? time[0] : ''} (UTC)`;

  return resultDate;
};
