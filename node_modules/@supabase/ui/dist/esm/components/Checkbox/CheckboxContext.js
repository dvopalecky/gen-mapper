import { createContext } from 'react';

// createContext matches the shape that the consumers expect!

const CheckboxContext = /*#__PURE__*/createContext({
  parentCallback: e => {},
  name: '',
  parentSize: ''
});

export { CheckboxContext };
