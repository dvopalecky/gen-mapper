import { jsx } from 'react/jsx-runtime';
import CheckCircle from '../../../../node_modules/react-feather/dist/icons/check-circle.js';
import IconBase from '../../IconBase.js';

function IconCheckCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: CheckCircle
  }, props), void 0);
}

export { IconCheckCircle as default };
