import { jsx } from 'react/jsx-runtime';
import Mail from '../../../../node_modules/react-feather/dist/icons/mail.js';
import IconBase from '../../IconBase.js';

function IconMail(props) {
  return jsx(IconBase, Object.assign({
    icon: Mail
  }, props), void 0);
}

export { IconMail as default };
