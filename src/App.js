import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, ScrollUp, Footer } from 'components';
import { Home, About, Catalog, Comments } from 'pages';

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/comments' component={Comments} />
            </Switch>

            <ScrollUp />
            <Footer />
        </div>
    );
}

export default App;