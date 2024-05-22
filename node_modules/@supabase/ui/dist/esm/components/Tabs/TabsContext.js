import { createContext } from 'react';

// createContext matches the shape that the consumers expect!

const TabsContext = /*#__PURE__*/createContext({
  activeId: ''
});

export { TabsContext };
