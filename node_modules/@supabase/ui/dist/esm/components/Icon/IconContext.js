import { createContext } from 'react';

// createContext matches the shape that the consumers expect!

const IconContext = /*#__PURE__*/createContext({
  contextSize: '',
  className: ''
});

export { IconContext };
