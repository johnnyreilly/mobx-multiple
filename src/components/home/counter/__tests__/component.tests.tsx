import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Counter } from '../component';

function makeStubCounterStore() {
    const stubCounterStore = {
        count: 0,
        increment() {
            this.count += 1;
        }
    };
    return stubCounterStore;
}

describe('counter', () => {
    it('component renders as expected', () => {
        const stubCounterStore = makeStubCounterStore();
        const component = renderer.create(
            <Counter counterStore={stubCounterStore} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});