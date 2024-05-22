import { jsx } from 'react/jsx-runtime';
import AlertCircle from '../../../../node_modules/react-feather/dist/icons/alert-circle.js';
import IconBase from '../../IconBase.js';

function IconAlertCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: AlertCircle
  }, props), void 0);
}

export { IconAlertCircle as default };
