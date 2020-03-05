import { PerType } from '../models/pertype.model';

const Type: PerType = {
    type: 'Demo',
    amount: 15,
};
const Types: PerType[] = [
    {type: 'Demo', amount: 240},
    {type: 'Rental', amount: 10},
];

export const amountMocks = {
    Type,
    Types
};
