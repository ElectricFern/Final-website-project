import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Gallery } from './Gallery';
import { Design } from './Design';
import { Contact } from './Contact';
import { PrivacyPolicy } from './PrivacyPolicy';
import { NoMatch } from './NoMatch';
import { Layout } from './components/GlobalComponents/Layout';
import { NavigationBar } from './components/GlobalComponents/NavigationBar';
import { Jumbotron } from './components/GlobalComponents/Jumbotron';
import { Footer } from './components/GlobalComponents/Footer';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="application-head-seo">
            <Helmet>
            <title>Renegade Seamsmith</title>
            <meta name="description" content="A place of cloaks and capes"/>
            <meta name="keywords" content="custom cloak cape design sewing wellington zealand"/>
            </Helmet>
        </div> 
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/design" component={Design} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy" component={PrivacyPolicy} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
