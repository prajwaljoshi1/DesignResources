import React, { Component } from 'react'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({format: e.target.value}, () => {
        this.props.handleChange(this.state.format);
      });
      
  }

  render() {

    const { level, changeLevel } = this.props;
    const {format} = this.state;

    return (
      <header className="navbar">
        <div className="logo">
          <a href="/">UiColorsAndGradiants</a>
        </div>
        <div className="slider-container">
          <span>level: {level}</span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100}  onAfterChange={changeLevel}/>
          </div>
        </div>
        <div className="select">
          <Select  value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}


export default Navbar;