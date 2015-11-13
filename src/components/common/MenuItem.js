'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class MenuItem extends ReactCSS.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        children: {
          display: 'none',
        },
        row: {
          display: 'flex',
          padding: '10px',
          cursor: 'pointer',
        },
        label: {
          flex: '1',
        },
        arrow: {
          display: 'none',
        },
      },
      'has-children': {
        arrow: {
          display: 'block',
        },
      },
      'open': {
        item: {
          background: '#eee',
        },
        children: {
          display: 'block',
        },
        arrow: {
          transform: 'rotate(180deg)',
        },
      },
    };
  }

  styles() {
    return this.css({
      'has-children': this.props.children != null,
      'open': this.state.isOpen,
    });
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={ this.styles().item }>
        <div style={ this.styles().row }>
          <div style={ this.styles().label } onClick={ this.handleClick }>{ this.props.label }</div>
          <div style={ this.styles().arrow }>v</div>
        </div>

        { this.props.children ? <div style={ this.styles().children }>
          { this.props.children.map(function(item, i) {
            return <MenuItem key={ i } {...item} />;
          }) }
        </div> : null }

      </div>
    );
  }
}

export default MenuItem;
