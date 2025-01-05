import moment from 'moment';

const DATE_FORMAT_STRING = 'MMMM Do YYYY';

export function getFormattedPreviousDay(date: string) {
    return moment(date, DATE_FORMAT_STRING).subtract(1, 'days').format(DATE_FORMAT_STRING);
}

export function getFormattedNextDay(date: string) {
    console.log(date)
    return moment(date, DATE_FORMAT_STRING).add(1, 'days').format(DATE_FORMAT_STRING);
}

export const FORMATTED_CURRENT_DATE = moment().format(DATE_FORMAT_STRING);