import * as React from 'react';
import { CounterStore } from '../../../stores/counterStore';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../../store';

export interface IProps {
    counterStore: CounterStore;
}

@inject(
    (allStores: Stores) => ({
        counterStore: allStores.counterStore
    }) as IProps
)
@observer
export class Counter extends React.Component<Partial<IProps>> {
    handleIncrement = () => {
        this.props.counterStore.increment();
    }

    render() {
        const { count } = this.props.counterStore;
        return (
            <div>
                The count is: {count}

                <button onClick={this.handleIncrement}>Increment counter</button>
            </div>
        );
    }
}
