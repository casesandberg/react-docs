'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import MaterialStyleSidebar from './MaterialStyleSidebar';

export class MaterialStyle extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        wrap: {
          display: 'flex',
          alignItems: 'stretch',
          Absolute: '0 0 0 0',
        },
        sidebar: {
          minWidth: '200px',
          maxWidth: '200px',
          background: '#fafafa',
        },
        content: {
          flex: '1',
        },
      },
    };
  }

  render() {
    return (
      <div style={ this.styles().wrap }>
        <div style={ this.styles().sidebar }>
          <MaterialStyleSidebar />
        </div>
        <div style={ this.styles().content }>
          Material Style
        </div>
      </div>
    );
  }
}

export default MaterialStyle;
