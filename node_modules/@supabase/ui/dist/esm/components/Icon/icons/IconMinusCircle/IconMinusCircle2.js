import { jsx } from 'react/jsx-runtime';
import MinusCircle from '../../../../node_modules/react-feather/dist/icons/minus-circle.js';
import IconBase from '../../IconBase.js';

function IconMinusCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: MinusCircle
  }, props), void 0);
}

export { IconMinusCircle as default };
