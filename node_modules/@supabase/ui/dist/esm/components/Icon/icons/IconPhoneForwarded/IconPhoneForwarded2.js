import { jsx } from 'react/jsx-runtime';
import PhoneForwarded from '../../../../node_modules/react-feather/dist/icons/phone-forwarded.js';
import IconBase from '../../IconBase.js';

function IconPhoneForwarded(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneForwarded
  }, props), void 0);
}

export { IconPhoneForwarded as default };
