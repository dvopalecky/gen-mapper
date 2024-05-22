import { jsx } from 'react/jsx-runtime';
import PhoneMissed from '../../../../node_modules/react-feather/dist/icons/phone-missed.js';
import IconBase from '../../IconBase.js';

function IconPhoneMissed(props) {
  return jsx(IconBase, Object.assign({
    icon: PhoneMissed
  }, props), void 0);
}

export { IconPhoneMissed as default };
