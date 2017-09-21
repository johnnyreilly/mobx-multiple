import * as React from 'react';
import { IFxRates } from '../../../api/fixer';
import { IAsyncRequest } from '../../../api/async';

export const Rates: React.SFC<IAsyncRequest<IFxRates>> = ({ error, isRequesting, response }) => (
    <div>
        <div>Is fetching: {isRequesting ? 'Yup' : 'Nope'}</div>
        {response
            ? <div>
                Base: {response.base}
                Date: {response.date}
                <ul>
                    {Object.keys(response.rates).map(ccy =>
                        <li key={ccy}>{response.rates[ccy]}</li>)}
                </ul>
            </div>
            : null}
        {error ? <div>There was a problem: {error}</div> : null}

    </div>
);
