import { jsx } from 'react/jsx-runtime';
import XSquare from '../../../../node_modules/react-feather/dist/icons/x-square.js';
import IconBase from '../../IconBase.js';

function IconXSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: XSquare
  }, props), void 0);
}

export { IconXSquare as default };
