import { jsx } from 'react/jsx-runtime';
import BatteryCharging from '../../../../node_modules/react-feather/dist/icons/battery-charging.js';
import IconBase from '../../IconBase.js';

function IconBatteryCharging(props) {
  return jsx(IconBase, Object.assign({
    icon: BatteryCharging
  }, props), void 0);
}

export { IconBatteryCharging as default };
