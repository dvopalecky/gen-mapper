import { jsx } from 'react/jsx-runtime';
import Gift from '../../../../node_modules/react-feather/dist/icons/gift.js';
import IconBase from '../../IconBase.js';

function IconGift(props) {
  return jsx(IconBase, Object.assign({
    icon: Gift
  }, props), void 0);
}

export { IconGift as default };
