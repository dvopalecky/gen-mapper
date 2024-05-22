import { jsx } from 'react/jsx-runtime';
import Minus from '../../../../node_modules/react-feather/dist/icons/minus.js';
import IconBase from '../../IconBase.js';

function IconMinus(props) {
  return jsx(IconBase, Object.assign({
    icon: Minus
  }, props), void 0);
}

export { IconMinus as default };
