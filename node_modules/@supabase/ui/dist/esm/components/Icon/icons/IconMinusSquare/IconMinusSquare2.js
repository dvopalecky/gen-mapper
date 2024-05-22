import { jsx } from 'react/jsx-runtime';
import MinusSquare from '../../../../node_modules/react-feather/dist/icons/minus-square.js';
import IconBase from '../../IconBase.js';

function IconMinusSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: MinusSquare
  }, props), void 0);
}

export { IconMinusSquare as default };
