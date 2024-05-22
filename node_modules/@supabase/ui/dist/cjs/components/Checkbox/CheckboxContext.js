'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// createContext matches the shape that the consumers expect!

const CheckboxContext = /*#__PURE__*/React.createContext({
  parentCallback: e => {},
  name: '',
  parentSize: ''
});

exports.CheckboxContext = CheckboxContext;
