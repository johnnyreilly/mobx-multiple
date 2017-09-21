import { observable, action } from 'mobx';
import { IAsyncRequest, isRequesting, performAsyncRequest, empty } from '../api/async';
import { IFxRates } from '../api/fixer';
import { api } from '../api';

type LastLoaded = 'rates' | 'ratesForDate';

export class FxRatesStore {
  @observable lastLoaded: LastLoaded = undefined;

  @observable rates: IAsyncRequest<IFxRates> = empty();

  @observable ratesForDate: IAsyncRequest<IFxRates> = empty();

  @action async loadRates() {
    this.rates = isRequesting();
    this.rates = await performAsyncRequest(api.fixer.getLatestRates());
    this.lastLoaded = 'rates';
  }

  @action async loadRatesForDate(date: string) {
    this.ratesForDate = isRequesting();
    this.ratesForDate = await performAsyncRequest(api.fixer.getRatesForDate(date));
    this.lastLoaded = 'ratesForDate';
  }
}