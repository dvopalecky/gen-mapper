import { jsx } from 'react/jsx-runtime';
import DivideCircle from '../../../../node_modules/react-feather/dist/icons/divide-circle.js';
import IconBase from '../../IconBase.js';

function IconDivideCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: DivideCircle
  }, props), void 0);
}

export { IconDivideCircle as default };
