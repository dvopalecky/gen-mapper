import { jsx } from 'react/jsx-runtime';
import DivideSquare from '../../../../node_modules/react-feather/dist/icons/divide-square.js';
import IconBase from '../../IconBase.js';

function IconDivideSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: DivideSquare
  }, props), void 0);
}

export { IconDivideSquare as default };
