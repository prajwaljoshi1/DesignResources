import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';


const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"

  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"

  },
  palettes: {

  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
             <h1>UIColorsAndGradiants</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map( palette =>   <MiniPalette { ...palette} />)}
          </div>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(PaletteList);