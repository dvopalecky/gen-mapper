import { jsx } from 'react/jsx-runtime';
import DollarSign from '../../../../node_modules/react-feather/dist/icons/dollar-sign.js';
import IconBase from '../../IconBase.js';

function IconDollarSign(props) {
  return jsx(IconBase, Object.assign({
    icon: DollarSign
  }, props), void 0);
}

export { IconDollarSign as default };
