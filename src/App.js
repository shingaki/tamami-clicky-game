import React, { Component } from 'react';
import ClickyHeader from './components/clickyheader';
import ClickyBanner from './components/clickybanner';
import ClickyBody from './components/clickybody';
import ClickyFooter from './components/clickyfooter';


class App extends Component {
  render() {
      return (
          <div>
              <ClickyHeader />
              <ClickyBanner />
              <ClickyBody />
              <ClickyFooter />
          </div>

      )
    }
}

export default App;
