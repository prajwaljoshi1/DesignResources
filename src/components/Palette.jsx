import React, { Component} from 'react';
import ColorBox from './ColorBox';

import './Palette.css';



class Palette extends Component {

  render() {

    const colorBoxes = this.props.colors.map((item)=>{
      return <ColorBox background={item.color} name={item.name} />
    });

    return (
      <div className="palette">
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