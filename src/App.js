import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from 'components';
import { Home, Catalog } from 'pages';

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route exact path='/catalog' component={Catalog} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;