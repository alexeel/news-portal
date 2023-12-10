// tslint:disable: prefer-template
const zf = function (n: number) {
  return n > 9 ? n : `0${n}`;
};

const plural = function (
  value: number,
  n1: string = '',
  n2: string = '',
  n5: string = '',
) {
  let num = Math.abs(value);
  num %= 100;
  if (num >= 5 && num <= 20) return n5;
  num %= 10;
  return num === 1 ? n1 : num >= 2 && num <= 4 ? n2 : n5;
};

const getDateAge = function (date: Date) {
  const now = new Date();
  const age = now.getTime() - date.getTime();
  const ageSec = Math.abs(Math.floor(age / 1000));
  const ageMin = Math.floor(ageSec / 60);
  const ageHrs = Math.round(ageMin / 60);
  const day = new Date(date).setHours(0, 0, 0, 0);
  const dtime = `${zf(date.getHours())}:${zf(date.getMinutes())}`;
  const dyear = date.getFullYear();

  let ddate = `${date.getDate()} ${getMonthLabel(date.getMonth())}`;
  ddate += dyear === now.getFullYear() ? '' : ` ${dyear}`;

  const textSec = `${ageSec > 1 ? `${ageSec} ` : ''}секунд${plural(
    ageSec,
    'у',
    'ы',
  )}`;
  const textMin = `${ageMin > 1 ? `${ageMin} ` : ''}минут${plural(
    ageMin,
    'у',
    'ы',
  )}`;
  const textHrs = `${ageHrs > 1 ? `${ageHrs} ` : ''}час${plural(
    ageHrs,
    '',
    'а',
    'ов',
  )}`;

  let dtext = `${ddate} в ${dtime}`;

  if (ageSec < 15) {
    dtext = age > 0 ? 'только что' : 'прямо сейчас';
  } else if (ageSec < 60) {
    dtext = age > 0 ? `${textSec} назад` : `через ${textSec}`;
  } else if (ageMin < 60) {
    dtext = age > 0 ? `${textMin} назад` : `через ${textMin}`;
  } else if (ageHrs < 12) {
    dtext = age > 0 ? `${textHrs} назад` : `через ${textHrs}`;
  } else if (day === new Date(now).setHours(0, 0, 0, 0)) {
    dtext = `сегодня в ${dtime}`;
  } else if (day === new Date(now).setHours(24, 0, 0, 0)) {
    dtext = `завтра в ${dtime}`;
  } else if (day === new Date(now).setHours(-24, 0, 0, 0)) {
    dtext = `вчера в ${dtime}`;
  }

  return dtext;
};

const getNames = function (key: number, field: string, loc: string = 'ru') {
  const locale: string = loc || (navigator.language === 'ru-RU' ? 'ru' : 'en');
  const names: any = {
    ru: {
      // tslint:disable: max-line-length
      short: [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ],
      title: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      label: [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
      ],
      day_short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      day_abbr: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
      day_full: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
    },
    en: {
      short: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      title: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      label: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
      ],
      day_short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      day_abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      day_full: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
  };
  return names[locale][field] ? names[locale][field][key] : '';
};

const getDateRFC = function (date: Date) {
  // RFC2822 new Date('Sun Feb 01 1998 00:00:00 GMT+0700');
  const dw = getNames(date.getDay(), 'day_abbr', 'en');
  const dm = getNames(date.getMonth(), 'short', 'en');
  const offset = date.getTimezoneOffset();
  const tzs = Math.abs(offset);
  const tzh = Math.ceil(tzs / 60);
  const tzm = tzs % 60;
  // tslint:disable-next-line: prefer-template
  const tz =
    (offset < 0 ? '+' : '-') +
    (tzh < 10 ? `0${tzh}` : tzh) +
    (tzm < 10 ? `0${tzm}` : tzm);
  return `${dw} ${dm} ${dateFormat(
    date.toString(),
    'dd yyyy h:nn:ss',
  )} GMT${tz}`;
};

const getDateISO = function (date: Date) {
  // ISO8601 new Date('1998-02-01T00:00:00+07:00');
  const offset = date.getTimezoneOffset();
  const tzs = Math.abs(offset);
  const tzh = Math.ceil(tzs / 60);
  const tzm = tzs % 60;
  // tslint:disable-next-line: prefer-template
  const tz =
    (offset < 0 ? '+' : '-') +
    (tzh < 10 ? `0${tzh}` : tzh) +
    (tzm < 10 ? `0${tzm}` : tzm);
  return dateFormat(date.toString(), 'yyyy-mm-ddTh:nn:ss') + tz;
};
const getMonthShort = function (n: number) {
  return getNames(n, 'short');
};
const getMonthTitle = function (n: number) {
  return getNames(n, 'title');
};
const getMonthLabel = function (n: number) {
  return getNames(n, 'label');
};
const getDayNames = function (n: number) {
  return getNames(n, 'day_short');
};
const getDayFullNames = function (n: number) {
  return getNames(n, 'day_full');
};
const getOffsetFromUTC = function (d: Date) {
  const offset = d.getTimezoneOffset();
  let tz = offset < 0 ? '+' : '-';
  tz += zf(Math.abs(offset / 60));
  tz += zf(Math.abs(offset % 60));
  return tz;
};
const dateFormat = function (
  date: Date | string,
  format: string = 'yyyy-mm-dd h:nn:ss',
): string {
  const dt = new Date(date);
  const thisYear = new Date().getFullYear();
  const replacer = function ($1: string) {
    let hours;
    switch ($1.toLowerCase()) {
      case 'age':
        return getDateAge(dt);
      case 'iso':
        return getDateISO(dt);
      case 'rfc':
        return getDateRFC(dt);
      case '?yyyy':
        return dt.getFullYear() !== thisYear ? ` ${dt.getFullYear()}` : '';
      case 'yyyy':
        return dt.getFullYear();
      case 'yy':
        return dt.getFullYear().toString().substr(-2);
      case 'mmru':
        return getMonthTitle(dt.getMonth());
      case 'mmmm':
        return getMonthLabel(dt.getMonth());
      case 'mmm':
        return getMonthShort(dt.getMonth());
      case 'mm':
        return zf(dt.getMonth() + 1);
      case 'dddd':
        return getDayFullNames(dt.getDay());
      case 'ddd':
        return getDayNames(dt.getDay());
      case 'dd':
        return zf(dt.getDate());
      case 'd':
        return dt.getDate();
      case 'hh':
        return zf((hours = dt.getHours() % 12) ? hours : 12);
      case 'h':
        return zf(dt.getHours());
      case 'nn':
        return zf(dt.getMinutes());
      case 'ss':
        return zf(dt.getSeconds());
      case 'ms':
        return dt.getMilliseconds();
      case 'a/p':
        return dt.getHours() < 12 ? 'a' : 'p';
      case 'tz':
        return getOffsetFromUTC(dt);
    }
  };

  return format.replace(
    /(age|iso|rfc|yyyy|\?yyyy|yy|mmru|mmmm|mmm|mm|dddd|ddd|dd|d|hh|h|nn|ss|ms|a\/p|tz)/gi,
    replacer,
  );
};

// export default dateFormat;
export { dateFormat as default, getNames };
