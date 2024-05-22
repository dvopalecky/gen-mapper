import { jsx } from 'react/jsx-runtime';
import AlertOctagon from '../../../../node_modules/react-feather/dist/icons/alert-octagon.js';
import IconBase from '../../IconBase.js';

function IconAlertOctagon(props) {
  return jsx(IconBase, Object.assign({
    icon: AlertOctagon
  }, props), void 0);
}

export { IconAlertOctagon as default };
