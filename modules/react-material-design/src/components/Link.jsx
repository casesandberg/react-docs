'use strict'

var React = require('react')
var _ = require('lodash')

class Link extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e, this.props.callbackValue)
    }
  }

  render() {

    var a
    if (_.isString(this.props.onClick)) {
      a = <a style={{ textDecoration: 'none' }} href={ this.props.onClick } target={ this.props.newTab && '_blank' }>{ this.props.children }</a>
    } else {
      a = <a style={{ textDecoration: 'none' }} onClick={ this.handleClick }>{ this.props.children }</a>
    }

    return a
  }
}

// Link.propTypes =
//   onClick: React.PropTypes.oneOfType(
//     React.PropTypes.string,
//     React.PropTypes.func
//   );

Link.defaultProps = {
  newTab: false,
}

module.exports = Link
