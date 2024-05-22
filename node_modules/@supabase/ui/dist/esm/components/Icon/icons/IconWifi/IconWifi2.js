import { jsx } from 'react/jsx-runtime';
import Wifi from '../../../../node_modules/react-feather/dist/icons/wifi.js';
import IconBase from '../../IconBase.js';

function IconWifi(props) {
  return jsx(IconBase, Object.assign({
    icon: Wifi
  }, props), void 0);
}

export { IconWifi as default };
