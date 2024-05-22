import { jsx } from 'react/jsx-runtime';
import MessageCircle from '../../../../node_modules/react-feather/dist/icons/message-circle.js';
import IconBase from '../../IconBase.js';

function IconMessageCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: MessageCircle
  }, props), void 0);
}

export { IconMessageCircle as default };
