import { CounterStore } from './stores/counterStore';

import { FxRatesStore } from './stores/fxRatesStore';
import { ListerStore } from './stores/listerStore';

export const stores = {
    fxRatesStore: new FxRatesStore(),
    lister1Store: new ListerStore(),
    lister2Store: new ListerStore(),
    counterStore: new CounterStore()
};

export type Stores = typeof stores;