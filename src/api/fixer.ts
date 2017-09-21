import { ajax } from './ajax';

export const getLatestRates = () => ajax<IFxRates>({
        method: 'get',
        url: 'https://api.fixer.io/latest'
    });

export const getRatesForDate = (date: string) =>
    ajax<IFxRates>({
        method: 'get',
        url: 'https://api.fixer.io/' + date
    });

export interface IFxRates {
    base: string;
    date: string;
    rates: { [ccy: string]: number };
}
