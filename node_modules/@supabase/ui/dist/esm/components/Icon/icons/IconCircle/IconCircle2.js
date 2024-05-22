import { jsx } from 'react/jsx-runtime';
import Circle from '../../../../node_modules/react-feather/dist/icons/circle.js';
import IconBase from '../../IconBase.js';

function IconCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: Circle
  }, props), void 0);
}

export { IconCircle as default };
