import { State } from '@progress/kendo-data-query';

export const dataStateConfig: State = {
    sort: [{ field: 'ProductID', dir: 'asc' }],
    take: 10,
    skip: 0,
};

export const MONTH_FORMAT = 'MMMM yyyy';
export const COMPACT_FORMAT = 'MM yyyy';
