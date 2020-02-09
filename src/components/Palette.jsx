import React, { Component} from 'react';
import ColorBox from './ColorBox';

import Navbar from './Navbar';

import './Palette.css';



class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    }
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({level});
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map((color)=>{
      return <ColorBox background={color.hex} name={color.name} />
    });

    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
        {/* navbar goes here */}
        <div className="palette-colors">
        {/* bunch of color boxes */}
         {colorBoxes}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;