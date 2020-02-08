import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


import './ColorBox.css';


class ColorBox extends Component {
  render() {

    const { name , background } = this.props;

    return (
      <CopyToClipboard text={background}>
        <div style={{background}} className="color-box">
        <div className="copy-container">
          <div className="box-content">
            <span> {name} </span>
          </div>
          <button className="copy-btn">Copy</button>
        </div>
        <div className="see-more">More</div>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox;