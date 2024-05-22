import { jsx } from 'react/jsx-runtime';
import BellOff from '../../../../node_modules/react-feather/dist/icons/bell-off.js';
import IconBase from '../../IconBase.js';

function IconBellOff(props) {
  return jsx(IconBase, Object.assign({
    icon: BellOff
  }, props), void 0);
}

export { IconBellOff as default };
