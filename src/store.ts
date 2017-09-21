
import { FxRatesStore } from './stores/fxRatesStore';

export const stores = {
    fxRatesStore: new FxRatesStore()
};

export type Stores = typeof stores;