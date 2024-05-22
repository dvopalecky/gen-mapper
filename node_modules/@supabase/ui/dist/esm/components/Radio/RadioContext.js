import { createContext } from 'react';

// createContext matches the shape that the consumers expect!

const RadioContext = /*#__PURE__*/createContext({
  parentCallback: e => {},
  type: '',
  name: '',
  activeId: '',
  parentSize: ''
});

export { RadioContext };
