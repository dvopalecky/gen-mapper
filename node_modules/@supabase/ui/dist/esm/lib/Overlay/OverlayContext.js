import { createContext } from 'react';

// createContext matches the shape that the consumers expect!

const DropdownContext = /*#__PURE__*/createContext({
  onClick: e => {}
});

export { DropdownContext };
