import { jsx } from 'react/jsx-runtime';
import Terminal from '../../../../node_modules/react-feather/dist/icons/terminal.js';
import IconBase from '../../IconBase.js';

function IconTerminal(props) {
  return jsx(IconBase, Object.assign({
    icon: Terminal
  }, props), void 0);
}

export { IconTerminal as default };
