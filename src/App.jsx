import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import seedColors from './seedColors';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import {generatePalette} from './colorHelper';

class App extends Component {

  findPalette(id) {
    return seedColors.find((palette)=>{
      return palette.id === id;
    })
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" render={()=> <PaletteList palettes={seedColors}/>}/>
        <Route 
          exact
          path="/palette/:id"
          render={ routeProps =>
            (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)
         }
        />
      </Switch>
      // <div>
      //    <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    )
  }

}


export default App;
