import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, ScrollUp, Footer } from 'components';
import { Home, About, Catalog, News, Comments, PrivacyPolicy } from 'pages';

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/catalog' component={Catalog} />
                <Route path='/news' component={News} />
                <Route exact path={['/comments', '/comments/page/:pageUrl']} component={Comments} />
                <Route path='/privacy-policy' component={PrivacyPolicy} />
            </Switch>

            <ScrollUp />
            <Footer />
        </div>
    );
}

export default App;