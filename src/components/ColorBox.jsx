import React, { Component } from 'react'

import './ColorBox.css';


class ColorBox extends Component {
  render() {

    const { name , background } = this.props;

    return (
      <div style={{background}} className="color-box">
       <div className="copy-container">
         <div className="box-content">
           <span> {name} </span>
         </div>
         <button className="copy-btn">Copy</button>
       </div>
       <div className="see-more">More</div>
      </div>
    )
  }
}

export default ColorBox;