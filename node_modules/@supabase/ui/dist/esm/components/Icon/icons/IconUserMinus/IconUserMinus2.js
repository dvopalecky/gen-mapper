import { jsx } from 'react/jsx-runtime';
import UserMinus from '../../../../node_modules/react-feather/dist/icons/user-minus.js';
import IconBase from '../../IconBase.js';

function IconUserMinus(props) {
  return jsx(IconBase, Object.assign({
    icon: UserMinus
  }, props), void 0);
}

export { IconUserMinus as default };
