import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Body from './Body'
import SideCollum from './SideCollum'
import Add1 from './Add1'
import Add2 from './Add2'
import Add3 from './Add3'
import Add4 from './Add4'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        

      <main className="expanded row">
        <Body />
        <SideCollum />
        <div className="small-12 columns other-articles">
          <Add1 />
          <Add2 />
          <Add3 />
          <Add4 />
        </div>
      </main>
      <Footer />
      </div>
    );
  }
}
export default App;
