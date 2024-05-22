import { jsx } from 'react/jsx-runtime';
import UserPlus from '../../../../node_modules/react-feather/dist/icons/user-plus.js';
import IconBase from '../../IconBase.js';

function IconUserPlus(props) {
  return jsx(IconBase, Object.assign({
    icon: UserPlus
  }, props), void 0);
}

export { IconUserPlus as default };
