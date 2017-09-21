import * as React from 'react';
import { observer } from 'mobx-react';
import { FxRates } from './fxRates';

interface IProps { }

export const Home: React.ComponentType<IProps> = observer(_props => {
    return (
        <div>
            <FxRates />
        </div>
    );
});
