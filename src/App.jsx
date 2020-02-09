import React, { Component} from 'react';

import seedColors from './seedColors';
import Palette from './components/Palette';
import {generatePalette} from './colorHelper';

class App extends Component {

  render(){
    return (
      <div>
         <Palette palette={generatePalette(seedColors[4])} />
      </div>
    )
  }

}


export default App;
