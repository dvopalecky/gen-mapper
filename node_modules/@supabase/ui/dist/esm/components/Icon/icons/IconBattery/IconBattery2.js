import { jsx } from 'react/jsx-runtime';
import Battery from '../../../../node_modules/react-feather/dist/icons/battery.js';
import IconBase from '../../IconBase.js';

function IconBattery(props) {
  return jsx(IconBase, Object.assign({
    icon: Battery
  }, props), void 0);
}

export { IconBattery as default };
