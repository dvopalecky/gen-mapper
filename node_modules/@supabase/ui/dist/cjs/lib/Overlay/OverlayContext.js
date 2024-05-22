'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// createContext matches the shape that the consumers expect!

const DropdownContext = /*#__PURE__*/React.createContext({
  onClick: e => {}
});

exports.DropdownContext = DropdownContext;
