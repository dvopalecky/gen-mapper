import { jsx } from 'react/jsx-runtime';
import PhoneIncoming from '../../../../node_modules/react-feather/dist/icons/phone-incoming.js';
import IconBase from '../../IconBase.js';

function IconPhoneIncoming(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneIncoming
  }, props), void 0);
}

export { IconPhoneIncoming as default };
