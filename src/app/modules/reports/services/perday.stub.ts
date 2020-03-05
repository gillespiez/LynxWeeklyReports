import { PerDay } from '../models/perday.model';

const HourDay: PerDay = {
    day: 'Monday',
    amountPerDay: 8,
};
const HoursDay: PerDay[] = [
    {day: 'Monday', amountPerDay: 24},
    {day: 'Tuesday', amountPerDay: 8},
    {day: 'Wednesday', amountPerDay: 2},
    {day: 'Thurday', amountPerDay: 18},
    {day: 'Friday', amountPerDay: 5},
    {day: 'Saturday', amountPerDay: 9},
    {day: 'Sunday', amountPerDay: 16},
];

export const PerDayMocks = {
    HourDay,
    HoursDay
};
