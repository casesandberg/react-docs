'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import MaterialStyleSidebar from './MaterialStyleSidebar';
import Breadcrumbs from '../common/Breadcrumbs';

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
        divider: {
          margin: '0 15px',
          boxShadow: 'inset 0 -1px 0 #eee',
        },
        body: {
          padding: '30px',
        },
      },
    };
  }

  render() {
    return (
      <div style={ this.styles().wrap }>
        <div style={ this.styles().sidebar }>
          <MaterialStyleSidebar route={ this.props.route } />
        </div>
        <div style={ this.styles().content }>
          <div style={ this.styles().divider }>
            <Breadcrumbs route={ this.props.route } />
          </div>
          <div style={ this.styles().body }>
            Material Style
          </div>
        </div>
      </div>
    );
  }
}

export default MaterialStyle;
