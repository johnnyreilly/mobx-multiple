import * as React from 'react';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Home } from './components/home';

interface IProps {}

@observer
export class App extends React.Component<IProps> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                    <hr />

                    <Route exact={true} path="/" component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}
