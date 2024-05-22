import { jsx } from 'react/jsx-runtime';
import PhoneOff from '../../../../node_modules/react-feather/dist/icons/phone-off.js';
import IconBase from '../../IconBase.js';

function IconPhoneOff(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneOff
  }, props), void 0);
}

export { IconPhoneOff as default };
