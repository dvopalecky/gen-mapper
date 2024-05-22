import { jsx } from 'react/jsx-runtime';
import WifiOff from '../../../../node_modules/react-feather/dist/icons/wifi-off.js';
import IconBase from '../../IconBase.js';

function IconWifiOff(props) {
  return jsx(IconBase, Object.assign({
    icon: WifiOff
  }, props), void 0);
}

export { IconWifiOff as default };
