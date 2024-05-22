import { jsx } from 'react/jsx-runtime';
import Bluetooth from '../../../../node_modules/react-feather/dist/icons/bluetooth.js';
import IconBase from '../../IconBase.js';

function IconBluetooth(props) {
  return jsx(IconBase, Object.assign({
    icon: Bluetooth
  }, props), void 0);
}

export { IconBluetooth as default };
