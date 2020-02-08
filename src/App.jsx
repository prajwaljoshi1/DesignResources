import React, { Component} from 'react';

import seedColors from './seedColors';
import Palette from './components/Palette';

class App extends Component {

  render(){
    return (
      <div>
         <Palette {...seedColors[4]} />
      </div>
    )
  }

}


export default App;
