import { jsx } from 'react/jsx-runtime';
import PhoneOutgoing from '../../../../node_modules/react-feather/dist/icons/phone-outgoing.js';
import IconBase from '../../IconBase.js';

function IconPhoneOutgoing(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneOutgoing
  }, props), void 0);
}

export { IconPhoneOutgoing as default };
