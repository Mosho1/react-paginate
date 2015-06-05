'use strict';

var React = require('react');

var PageView = React.createClass({
  displayName: 'PageView',

  render: function render() {
    if (this.props.selected) {
      var cssClass = this.props.activeClass || 'selected';
    }
    return React.createElement(
      'li',
      { className: cssClass },
      React.createElement(
        'a',
        this.props,
        this.props.page
      )
    );
  }
});

module.exports = PageView;