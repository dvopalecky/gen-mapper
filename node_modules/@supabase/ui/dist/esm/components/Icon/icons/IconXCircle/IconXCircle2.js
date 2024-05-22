import { jsx } from 'react/jsx-runtime';
import XCircle from '../../../../node_modules/react-feather/dist/icons/x-circle.js';
import IconBase from '../../IconBase.js';

function IconXCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: XCircle
  }, props), void 0);
}

export { IconXCircle as default };
