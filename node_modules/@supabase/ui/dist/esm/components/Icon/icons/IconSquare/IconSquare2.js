import { jsx } from 'react/jsx-runtime';
import Square from '../../../../node_modules/react-feather/dist/icons/square.js';
import IconBase from '../../IconBase.js';

function IconSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: Square
  }, props), void 0);
}

export { IconSquare as default };
