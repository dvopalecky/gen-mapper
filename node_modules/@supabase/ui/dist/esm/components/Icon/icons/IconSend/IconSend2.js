import { jsx } from 'react/jsx-runtime';
import Send from '../../../../node_modules/react-feather/dist/icons/send.js';
import IconBase from '../../IconBase.js';

function IconSend(props) {
  return jsx(IconBase, Object.assign({
    icon: Send
  }, props), void 0);
}

export { IconSend as default };
