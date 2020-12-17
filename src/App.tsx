import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { MyPage } from './pages/MyPage/MyPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/myPage" component={MyPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
