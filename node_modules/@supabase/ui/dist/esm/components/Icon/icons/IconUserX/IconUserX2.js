import { jsx } from 'react/jsx-runtime';
import UserX from '../../../../node_modules/react-feather/dist/icons/user-x.js';
import IconBase from '../../IconBase.js';

function IconUserX(props) {
  return jsx(IconBase, Object.assign({
    icon: UserX
  }, props), void 0);
}

export { IconUserX as default };
