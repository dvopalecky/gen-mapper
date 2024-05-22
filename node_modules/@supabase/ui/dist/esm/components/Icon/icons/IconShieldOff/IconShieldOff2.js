import { jsx } from 'react/jsx-runtime';
import ShieldOff from '../../../../node_modules/react-feather/dist/icons/shield-off.js';
import IconBase from '../../IconBase.js';

function IconShieldOff(props) {
  return jsx(IconBase, Object.assign({
    icon: ShieldOff
  }, props), void 0);
}

export { IconShieldOff as default };
