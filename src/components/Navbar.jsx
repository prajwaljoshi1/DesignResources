import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChange(e) {
      this.setState({
        format: e.target.value,
        open : this.state.format !== e.target.value
      }, () => {
        this.props.handleChange(this.state.format);
    }); 
  }
  closeSnackbar() {
    this.setState({open: false})
  }

  render() {

    const { level, changeLevel } = this.props;
    const {format, open} = this.state;

    return (
      <header className="navbar">
        <div className="logo">
          <Link to="/">UIColorsAndGradiants</Link>
        </div>
        <div className="slider-container">
          <span>level: {level}</span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100}  onAfterChange={changeLevel}/>
          </div>
        </div>
        <div className="select-container">
          <Select  value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical:"bottom", horizontal:"left"}}
          open={open}
          autoHideDuration={3000}
    message={<span id="message-id">Format changed to {format}.</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton 
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
            > 
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </header>
    )
  }
}


export default Navbar;