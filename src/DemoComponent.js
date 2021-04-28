import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DemoComponent.css';
import logo from './logo.png';

class DemoComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button onclick={this.handleOnClick}><img alt="logo" className="img" src={logo}/></button>
      </div>
    );
  }
}

DemoComponent.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DemoComponent;
