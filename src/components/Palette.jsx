import React, { Component} from 'react';
import ColorBox from './ColorBox';

import Navbar from './Navbar';

import './Palette.css';



class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({level});
  }

  changeFormat(val){
    debugger;
    this.setState({format: val});
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((color)=>{
      return <ColorBox background={color[format]} name={color.name} />
    });

    return (
      <div className="palette">
        <Navbar level={level} 
                changeLevel={this.changeLevel} 
                handleChange={this.changeFormat}
        />
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