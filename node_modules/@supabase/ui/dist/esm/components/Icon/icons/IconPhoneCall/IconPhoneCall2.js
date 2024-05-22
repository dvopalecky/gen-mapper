import { jsx } from 'react/jsx-runtime';
import PhoneCall from '../../../../node_modules/react-feather/dist/icons/phone-call.js';
import IconBase from '../../IconBase.js';

function IconPhoneCall(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneCall
  }, props), void 0);
}

export { IconPhoneCall as default };
