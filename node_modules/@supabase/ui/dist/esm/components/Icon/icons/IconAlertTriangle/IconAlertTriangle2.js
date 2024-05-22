import { jsx } from 'react/jsx-runtime';
import AlertTriangle from '../../../../node_modules/react-feather/dist/icons/alert-triangle.js';
import IconBase from '../../IconBase.js';

function IconAlertTriangle(props) {
  return jsx(IconBase, Object.assign({
    icon: AlertTriangle
  }, props), void 0);
}

export { IconAlertTriangle as default };
